import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
    constructor(private fb: FormBuilder) {
  
      this.userForm = this.fb.group( {
        firstname: ['Mike', Validators.required],
        lastname: [''],
      });
  
    }

  ngOnInit(): void {
    setTimeout(() => {
           // this.userForm.patchValue({firstname: "Some Random Guy"});
           this.userForm.setValue({firstname: "Some Random Guy", lastname: "Some new last name" });
          }, 4000);''
        }
 submit(){
    console.log(this.userForm.value);
    }
  }


