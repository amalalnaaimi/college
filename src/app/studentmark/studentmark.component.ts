import { Component } from '@angular/core';

@Component({
  selector: 'app-studentmark',
  templateUrl: './studentmark.component.html',
  styleUrls: ['./studentmark.component.scss']
})
export class StudentmarkComponent {


  smark: number=0;
  students:any =[
    {unme: 'Alice', email: 'alice@example.com', smark: 43 },
    {unme:'fatma',email:'fatma@gmail.com',smark: 55},
    {unme:'huda',email:'huda@gmail.com',smark: 30},
    {unme:'hajer',email:'hajer@gmail.com',smark: 60},
    {unme:'whida',email:'whida@gmail.com',smark: 80},

   ];
   resulte='';
   getMarkStyle(smark: number): string {
    if (smark >= 50) {
      this.resulte = 'pass'; // Set resulte to 'pass'
      return 'pass';
    } else {
      this.resulte = 'fail'; // Set resulte to 'fail'
      return 'fail';
    }
  }


}


