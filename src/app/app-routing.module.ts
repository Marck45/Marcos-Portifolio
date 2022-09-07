import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MaintitleComponent } from './maintitle/maintitle.component';
import { TechnologyComponent } from './technology/technology.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:'', component: MaintitleComponent },
  {path:'about', component: MaintitleComponent },
  {path:'technology', component: TechnologyComponent },
  {path:'works', component: WorksComponent },
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
