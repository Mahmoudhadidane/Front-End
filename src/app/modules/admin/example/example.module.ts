import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckingsModule } from 'app/modules/checking/checkings-module';
import { CreateCheckingComponent } from 'app/modules/checking/create-checking/create-checking.component';
import { CheckingsListComponent } from 'app/modules/checking/checkings-list/checkings-list.component';
import { ViewPersonCheckingsComponent } from 'app/modules/checking/view-person-checkings/view-person-checkings.component';
import { CreateCollectiveCheckingsComponent } from 'app/modules/checking/create-collective-checkings/create-collective-checkings.component';
import { CreatePersonsCheckingsComponent } from 'app/modules/checking/create-persons-checkings/create-persons-checkings.component';
import { AllCheckingsComponent } from 'app/modules/checking/all-checkings/all-checkings.component';
import { ViewDayCheckingsComponent } from 'app/modules/checking/view-day-checkings/view-day-checkings.component';
import { ViewPersonsCheckingsComponent } from 'app/modules/checking/view-persons-checkings/view-persons-checkings.component';
import { ViewCollectiveCheckingsComponent } from 'app/modules/checking/view-collective-checkings/view-collective-checkings.component';
import { ViewUserCheckingsComponent } from 'app/modules/checking/view-user-checkings/view-user-checkings.component';
import { DeviceModule } from 'app/modules/device/device.module';
import { CreateDeviceComponent } from 'app/modules/device/create-device/create-device.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
        children: [
           {
            path:"create-device",
            component:CreateDeviceComponent
           }


            // Add more child routes as needed
        ],
    },
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        CheckingsModule, 
        DeviceModule// Ensure CheckingsModule is imported if using components directly
    ]
})
export class ExampleModule {/*...*/}