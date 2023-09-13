import { Component } from '@angular/core';

@Component({
  selector: 'app-student', 
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  title:string='Student details';
 
  topic="";
  name='amal';
  phone=99578336;
  age=11;
 value='';
  getvalue(val:string)
  {
    console.warn(val);
    this.value=val;

  }

}
