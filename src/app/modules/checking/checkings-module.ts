import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { CreateCheckingComponent } from './create-checking/create-checking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseAlertModule } from '@fuse/components/alert';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { ViewPersonCheckingsComponent } from './view-person-checkings/view-person-checkings.component';

import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core';
import { CheckingsListComponent } from "./checkings-list/checkings-list.component"; 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CheckingDetailDialogComponent } from './checking-detail-dialog/checking-detail-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateCollectiveCheckingsComponent } from './create-collective-checkings/create-collective-checkings.component';
import { MatChipsModule } from '@angular/material/chips';
import { CreatePersonsCheckingsComponent } from './create-persons-checkings/create-persons-checkings.component';
import { AllCheckingsComponent } from './all-checkings/all-checkings.component';
import { ViewPersonsCheckingsComponent } from './view-persons-checkings/view-persons-checkings.component';
import { ViewDayCheckingsComponent } from './view-day-checkings/view-day-checkings.component';
import { ViewCollectiveCheckingsComponent } from './view-collective-checkings/view-collective-checkings.component';
import { ViewUserCheckingsComponent } from './view-user-checkings/view-user-checkings.component';
import { UserCreateCheckingComponent } from './user-create-checking/user-create-checking.component';
import { UserViewCheckingsComponent } from './user-view-checkings/user-view-checkings.component';

export const routes: Route[] = [
  // Define your routes here if necessary
];

@NgModule({
    declarations: [
        CreateCheckingComponent,
        ViewPersonCheckingsComponent,
        CheckingsListComponent,
        CreateCollectiveCheckingsComponent,
        CreatePersonsCheckingsComponent,
        AllCheckingsComponent,
        ViewPersonsCheckingsComponent,
        ViewDayCheckingsComponent,
        ViewCollectiveCheckingsComponent,
        ViewUserCheckingsComponent,
        UserCreateCheckingComponent,
        UserViewCheckingsComponent,
    ],
    imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    SharedModule,
    ReactiveFormsModule,
    FuseAlertModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatTableModule,
     MatPaginatorModule,
     MatIconModule,
     MatDialogModule,
     MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatChipsModule
   

],
    exports: [
    ]
})
export class CheckingsModule { }
