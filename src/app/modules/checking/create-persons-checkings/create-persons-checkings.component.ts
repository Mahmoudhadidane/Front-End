import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { timer } from 'rxjs';
@Component({
  selector: 'app-create-persons-checkings',
  templateUrl: './create-persons-checkings.component.html',
  styleUrls: ['./create-persons-checkings.component.scss']
})
export class CreatePersonsCheckingsComponent {
  form = new FormGroup({
    matricule: new FormControl(''),
    direction: new FormControl(''),
});
error: string | null = null;
success: string | null = null;
state: String = 'collapsed';
martriculesList: String[] = [];
constructor() {}
formatDate(date: Date): string {
    const pad = (num: number): string =>
        num < 10 ? `0${num}` : num.toString();

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // getMonth() returns month from 0-11
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

remove(matricule: string): void {
    this.martriculesList = this.martriculesList.filter(
        (m) => m !== matricule
    );
}
onSubmit(): void {
    if (
        this.martriculesList.length == 0 ||
        this.form.value.direction == ''
    ) {
        this.error = 'Please fill all fields';
        timer(2500).subscribe(() => {
            this.error = null;
        });
        return;
    }

    let checkingsList = {
        matricule: this.martriculesList,
        direction: this.form.value.direction,
        date: this.formatDate(new Date()),
        source: 'USER',
    };
    console.log(checkingsList);
    this.error = null;
    this.success = 'Checkings created successfully';
    timer(1500).subscribe(() => {
        this.success = null;
    });
}
addMatricule() {
 
    if (this.form.value.matricule) {
        this.martriculesList.push(this.form.value.matricule);
        this.form.controls['matricule'].setValue('');
    }
}
}
