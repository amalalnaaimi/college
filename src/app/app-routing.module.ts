import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentmarkComponent } from './studentmark/studentmark.component';

const routes: Routes = [
  {path:'',component:StudentComponent},
  {path:'studentmark',component:StudentmarkComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
