import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { CheckingsModule } from './modules/checking/checkings-module';
import { CheckingDetailDialogComponent } from './modules/checking/checking-detail-dialog/checking-detail-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { AddDeviceComponent } from './app/modules/device/add-device/add-device.component';



const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        CheckingDetailDialogComponent,
        AddDeviceComponent,

    
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),
        CheckingsModule,
        // Core module of your application
        CoreModule,
        MatIconModule,
        // Layout module of your application
        LayoutModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
