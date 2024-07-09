import { Type } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AppState,
  EndpointOnlyAppState,
  endpointEntitiesSelector,
  endpointsEntityRequestDataSelector,
  EndpointModel,
} from '@stratosui/store';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

import { EndpointListDetailsComponent } from '../../shared/components/list/list-types/endpoint/endpoint-list.helpers';

export function getEndpointUsername(endpoint: EndpointModel) {
  return endpoint && endpoint.user ? endpoint.user.name : '-';
}

export const DEFAULT_ENDPOINT_TYPE = 'cf';

export interface EndpointIcon {
  name: string;
  font: string;
}

// Any initial endpointTypes listDetailsComponent should be added here
export const coreEndpointListDetailsComponents: Type<EndpointListDetailsComponent>[] = [];

export function endpointHasMetrics(endpointGuid: string, store: Store<EndpointOnlyAppState>): Observable<boolean> {
  return store.select(endpointEntitiesSelector).pipe(
    first(),
    map(state => !!state[endpointGuid].metadata && !!state[endpointGuid].metadata.metrics)
  );
}

// There are two different methods for checking if an endpoint has metrics. Need to understand use cases
export function endpointHasMetricsByAvailable(store: Store<AppState>, endpointId: string): Observable<boolean> {
  return store.select(endpointsEntityRequestDataSelector(endpointId)).pipe(
    filter(endpoint => !!endpoint),
    map(endpoint => endpoint.metricsAvailable),
    first()
  );
}

// Client Redirect URI for SSO
export function getSSOClientRedirectURI(): string {
  return window.location.protocol + '//' + window.location.hostname +
    (window.location.port ? ':' + window.location.port : '') + '/pp/v1/auth/sso_login_callback';
}
