import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentComponent } from './departments/department/department.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'redirect', redirectTo: 'help', pathMatch: 'prefix'},
  {path: 'department', component: DepartmentComponent},
  {path: 'department/:id', component: DepartmentDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutComponent,
  HelpComponent,
  HomeComponent,
  NotFoundComponent,
  DepartmentComponent,
  DepartmentDetailComponent,
];
