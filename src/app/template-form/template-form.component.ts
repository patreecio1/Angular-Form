import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  user = {firstname: '', lastname: '', bio: ''};
  constructor() { }

  ngOnInit(): void {
  }
  log(model: any){
    console.log(model);
  }

  submit(lastname: any,firstname: any,bio: any){
    console.log(lastname.value);
    console.log(firstname.value);
    console.log(bio.value);

    const data = {lastname: lastname.value,
      firstname: firstname.value, bio: bio.value };
      console.log(data);
  }

  submitTwoWay(){
    console.log(this.user);
  }

}

