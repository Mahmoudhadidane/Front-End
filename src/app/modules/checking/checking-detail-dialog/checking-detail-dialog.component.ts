// checking-detail-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Checking } from '../checkings-list/checkings-list.component';
@Component({
    selector: 'app-checking-detail-dialog',
    templateUrl: './checking-detail-dialog.component.html',
    styleUrls: ['./checking-detail-dialog.component.scss']
})
export class CheckingDetailDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CheckingDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Checking
    ) {}

    onClose(): void {
        this.dialogRef.close();
    }
}
