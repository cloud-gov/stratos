import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { AddApiKeyDialogComponent } from './add-api-key-dialog/add-api-key-dialog.component';
import { ApiKeysPageComponent } from './api-keys-page/api-keys-page.component';
import { ApiKeysRoutingModule } from './api-keys.routing';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ApiKeysRoutingModule,
  ],
  declarations: [
    ApiKeysPageComponent,
    AddApiKeyDialogComponent
  ]
})
export class ApiKeysModule { }

