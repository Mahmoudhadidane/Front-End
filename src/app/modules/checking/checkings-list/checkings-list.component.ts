import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CheckingDetailDialogComponent } from '../checking-detail-dialog/checking-detail-dialog.component';
import { fuseAnimations } from '@fuse/animations';
import { timer } from 'rxjs';

/**
 * @title Table with pagination
 */
@Component({
    selector: 'checkings-list',
    styleUrls: ['./checkings-list.component.scss'],
    templateUrl: './checkings-list.component.html',

})
export class CheckingsListComponent implements AfterViewInit {
    displayedColumns: string[] = [
        'id',
        'Date',
        'Time',
        'matricule',
        'direction',
        'more',
        'delete'
    ];
    @Input() role: string;
    dataSource = new MatTableDataSource<Checking>(ELEMENT_DATA);
    checkingDeleted: boolean = false;
    @Input() loading;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(public dialog: MatDialog) {}
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    view(element: Checking): void {
      this.dialog.open(CheckingDetailDialogComponent, {
          width: '380px',
          data: element
      });
  }z

    delete(id: string): void {
        // Implement the delete logic here
        this.checkingDeleted = !this.checkingDeleted;
        timer(1500).subscribe(() => {
            this.checkingDeleted = !this.checkingDeleted;
        });
    }
    formatDate(date: Date): string {
      const pad = (num: number): string => num < 10 ? `0${num}` : num.toString();
    
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1); // getMonth() returns month from 0-11
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
    
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }
}

export interface Checking {
    id: string;
    date: String;
    time:String;
    logicalTime: Date;
    matricule: string;
    checkingData: { [key: string]: string };
    directionGenerated: boolean;
    ignoredByCalc: boolean;
    userSetTime: Date;
    actualSource: string;
    direction: string;
    used: boolean;
    timesheetId: number;
    deleted: boolean;
    person: number;
    user: number;
}

const ELEMENT_DATA: Checking[] = [
    {
        id: '1',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T12:34:00'),
        matricule: '1234',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T12:34:00'),
        actualSource: 'USER',
        direction: 'IN',
        used: false,
        timesheetId: 1,
        deleted: false,
        person: 1,
        user: 1,
    },
    {
        id: '2',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T13:34:00'),
        matricule: '5678',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T13:34:00'),
        actualSource: 'HARDWARE',
        direction: 'OUT',
        used: false,
        timesheetId: 2,
        deleted: false,
        person: 2,
        user: 2,
    },
    {
        id: '3',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T12:34:00'),
        matricule: '1234',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T12:34:00'),
        actualSource: 'USER',
        direction: 'IN',
        used: false,
        timesheetId: 1,
        deleted: false,
        person: 1,
        user: 1,
    },
    {
        id: '4',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T13:34:00'),
        matricule: '5678',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T13:34:00'),
        actualSource: 'HARDWARE',
        direction: 'OUT',
        used: false,
        timesheetId: 2,
        deleted: false,
        person: 2,
        user: 2,
    },
    {
        id: '5',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T12:34:00'),
        matricule: '1234',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T12:34:00'),
        actualSource: 'USER',
        direction: 'IN',
        used: false,
        timesheetId: 1,
        deleted: false,
        person: 1,
        user: 1,
    },
    {
        id: '6',
        date: '2023-07-19',
        time:'13:34:00',
        logicalTime: new Date('2023-07-19T13:34:00'),
        matricule: '5678',
        checkingData: {},
        directionGenerated: true,
        ignoredByCalc: false,
        userSetTime: new Date('2023-07-19T13:34:00'),
        actualSource: 'HARDWARE',
        direction: 'OUT',
        used: false,
        timesheetId: 2,
        deleted: false,
        person: 2,
        user: 2,
    },
    // Add more Checking data as needed
];
