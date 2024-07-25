import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timer } from 'rxjs';


@Component({
  selector: 'app-view-persons-checkings',
  templateUrl: './view-persons-checkings.component.html',
  styleUrls: ['./view-persons-checkings.component.scss']
})
export class ViewPersonsCheckingsComponent {
  form: FormGroup;
  defaultDate: Date = new Date();
  loading: boolean = false;
  hideSeach: boolean = false;
  martriculesList: String[] = ["azed"];
  remove(matricule: string): void {
    this.martriculesList = this.martriculesList.filter(
        (m) => m !== matricule
    );
}
  constructor(private fb: FormBuilder) { }
toggleSearch(): void {
    this.hideSeach = !this.hideSeach;
    console.log(this.hideSeach);

}
  ngOnInit(): void {
    this.form = this.fb.group({
      startDate: [null],
      startTime: ['00:00']
    });
  }
  addMatricule() {
    console.log(this.form.value);
    if (this.form.value.matricule) {
        this.martriculesList.push(this.form.value.matricule);
        this.form.controls['matricule'].setValue('');
    }
}
  searchCheckings(): void {
    const startDateValue = this.form.get('startDate').value;
    const startTimeValue = this.form.get('startTime').value;

    // Assuming startDateValue is a Date object and startTimeValue is a string in 'HH:mm' format
    if (startDateValue && startTimeValue) {
      const [hours, minutes] = startTimeValue.split(':').map(Number);
      const startDate = new Date(startDateValue);
      startDate.setHours(hours, minutes);

      console.log(`DateTime: ${this.formatDate(startDate)}`);
    }
    this.loading = true
    timer(1500).subscribe(() => {
      this.loading = false;
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

