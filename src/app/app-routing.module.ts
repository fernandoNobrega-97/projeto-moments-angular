import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MommentComponent } from './components/pages/momment/momment.component';
import { EditMommentComponent } from './components/pages/edit-momment/edit-momment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'momments/new', component: NewMomentComponent },
  { path: 'momments/edit/:id', component: EditMommentComponent },
  { path: 'momments/:id', component: MommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
