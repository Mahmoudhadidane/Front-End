import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-create-checking',
  templateUrl: './create-checking.component.html',
  styleUrls: ['./create-checking.component.scss'],
  animations : fuseAnimations
})
export class CreateCheckingComponent {
  form = new FormGroup({
	matricule: new FormControl(''),
	direction: new FormControl('')
  });
  error: string | null = null;
  success: string | null = null;
  state:String = 'collapsed';
  constructor() {}
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
  
  // Usage

  onSubmit(): void {
    if(this.form.value.matricule == "" || this.form.value.direction == ""){
      this.error = "Please fill all fields";
      timer(2500).subscribe(() => {
        this.error = null;
      });
      return;
    }
  let checking = {
    "matricule": this.form.value.matricule,
    "direction": this.form.value.direction,
    "date": this.formatDate(new Date()),
    "source":"USER"
  }
  console.log(checking);
  this.error = null;
  this.success = "Checkings created successfully";
  timer(1500).subscribe(() => {
    this.success = null;
  });

  }
  onMouseEnter(): void {
    this.state = 'expanded';
  }

  onMouseLeave(): void {
    this.state = 'collapsed';
  }
}