import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  endpointEntitiesSelector,
  endpointStatusSelector,
  EndpointOnlyAppState,
  EntityCatalogHelpers,
  IRequestEntityTypeState,
  IEndpointFavMetadata,
  UserFavorite,
  entityCatalog,
  AuthState,
  RouterNav,
  EndpointHealthCheck,
  EndpointModel,
  EndpointState,
} from '@stratosui/store';
import { combineLatest as observableCombineLatest, Observable } from 'rxjs';
import { first, map, skipWhile, withLatestFrom } from 'rxjs/operators';

import { endpointHasMetricsByAvailable } from '../features/endpoints/endpoint-helpers';
import { SessionService } from '../shared/services/session.service';
import { EndpointHealthChecks } from './endpoints-health-checks';
import { UserService } from './user.service';

@Injectable()
export class EndpointsService implements CanActivate {

  endpoints$: Observable<IRequestEntityTypeState<EndpointModel>>;
  haveRegistered$: Observable<boolean>;
  haveConnected$: Observable<boolean>;
  disablePersistenceFeatures$: Observable<boolean>;
  connectedEndpoints$: Observable<EndpointModel[]>;

  static getLinkForEndpoint(endpoint: EndpointModel): string {
    if (!endpoint) {
      return '';
    }
    const catalogEntity = entityCatalog.getEndpoint(endpoint.cnsi_type, endpoint.sub_type);
    const metadata = catalogEntity.builders.entityBuilder.getMetadata(endpoint);
    if (catalogEntity) {
      const fav = new UserFavorite<IEndpointFavMetadata>(
        endpoint.guid,
        endpoint.cnsi_type,
        EntityCatalogHelpers.endpointType,
        null,
        metadata
      );
      return fav.getLink();
    }
    return '';
  }

  constructor(
    private store: Store<EndpointOnlyAppState>,
    private userService: UserService,
    private endpointHealthChecks: EndpointHealthChecks,
    private sessionService: SessionService
  ) {
    this.endpoints$ = store.select(endpointEntitiesSelector);
    this.haveRegistered$ = this.endpoints$.pipe(map(endpoints => !!Object.keys(endpoints).length));
    this.connectedEndpoints$ = this.endpoints$.pipe(map(endpoints =>
      Object.values(endpoints).filter(endpoint => {
        const epType = entityCatalog.getEndpoint(endpoint.cnsi_type, endpoint.sub_type);
        if (!epType || !epType.definition) {
          return false;
        }
        const epEntity = epType.definition;
        return epEntity.unConnectable || endpoint.connectionStatus === 'connected' || endpoint.connectionStatus === 'checking';
      })
    ));
    this.haveConnected$ = this.connectedEndpoints$.pipe(map(endpoints => endpoints.length > 0));

    this.disablePersistenceFeatures$ = this.store.select('auth').pipe(
      map((auth) => auth.sessionData &&
        auth.sessionData['plugin-config'] &&
        auth.sessionData['plugin-config'].disablePersistenceFeatures === 'true'
      )
    );
  }

  public registerHealthCheck(healthCheck: EndpointHealthCheck) {
    this.endpointHealthChecks.registerHealthCheck(healthCheck);
  }

  public checkEndpoint(endpoint: EndpointModel) {
    this.endpointHealthChecks.checkEndpoint(endpoint);
  }

  public checkAllEndpoints() {
    this.endpoints$.pipe(first()).subscribe(endpoints => Object.keys(endpoints).forEach(guid => this.checkEndpoint(endpoints[guid])));
  }

  canActivate(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): Observable<boolean> {
    // Reroute user to endpoint/no endpoint screens if there are no connected or registered endpoints
    return observableCombineLatest(
      this.store.select('auth'),
      this.store.select(endpointStatusSelector)
    ).pipe(
      skipWhile(([state, endpointState]: [AuthState, EndpointState]) => {
        return !state.loggedIn || endpointState.loading;
      }),
      withLatestFrom(
        this.haveRegistered$,
        this.haveConnected$,
        this.userService.isAdmin$,
        this.userService.isEndpointAdmin$,
        this.sessionService.userEndpointsEnabled(),
        this.disablePersistenceFeatures$
      ),
      map(([state, haveRegistered, haveConnected, isAdmin, isEndpointAdmin, userEndpointsEnabled, disablePersistenceFeatures]
        : [[AuthState, EndpointState], boolean, boolean, boolean, boolean, boolean, boolean]) => {
        const [authState] = state;
        if (authState.sessionData.valid) {
          // Redirect to endpoints if there's no connected endpoints
          let redirect: string;
          if (!disablePersistenceFeatures) {
            if (!haveRegistered) {
              redirect = isAdmin || (userEndpointsEnabled && isEndpointAdmin) ? '/endpoints' : '/noendpoints';
            } else if (!haveConnected) {
              redirect = '/endpoints';
            }
          }

          // Abort redirect if there's no redirect needed (endpoints are ok or we're already heading to redirect)
          if (!redirect || redirect === routeState.url) {
            return true;
          }

          this.store.dispatch(new RouterNav({ path: [redirect] }, null));
        }

        return false;
      }));
  }

  hasMetrics(endpointId: string): Observable<boolean> {
    return endpointHasMetricsByAvailable(this.store, endpointId);
  }

  doesNotHaveConnectedEndpointType(type: string): Observable<boolean> {
    return this.connectedEndpointsOfTypes(type).pipe(
      map(eps => eps.length === 0)
    );
  }

  hasConnectedEndpointType(type: string): Observable<boolean> {
    return this.connectedEndpointsOfTypes(type).pipe(
      map(eps => eps.length > 0)
    );
  }

  connectedEndpointsOfTypes(type: string): Observable<EndpointModel[]> {
    return this.endpoints$.pipe(
      map(ep => {
        return Object.values(ep)
          .filter(endpoint => {
            if (endpoint.cnsi_type !== type) {
              return;
            }
            const epType = entityCatalog.getEndpoint(endpoint.cnsi_type, endpoint.sub_type).definition;
            return epType.unConnectable || endpoint.connectionStatus === 'connected';
          });
      })
    );
  }
}
