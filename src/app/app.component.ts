import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = 'My Revision Class';
  gender: number = 1
  male = 0;
  female = 1;
  transgender = 2;
  
  changestyle()
{
  console.log('click')
}
}
