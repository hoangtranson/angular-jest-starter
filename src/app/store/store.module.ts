import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment as env } from 'src/environments/environment';
import { UserService } from './user/user.service';
import { UserState } from './user/user.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([UserState], { developmentMode: !env.production }),
    NgxsStoragePluginModule.forRoot({
      storage: 1,
    }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false, disabled: env.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: env.production }),
  ],
  exports: [NgxsLoggerPluginModule, NgxsStoragePluginModule, NgxsReduxDevtoolsPluginModule, NgxsModule],
  providers: [UserService],
})
export class StoreModule {}
