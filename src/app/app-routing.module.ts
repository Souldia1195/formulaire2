import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'connexion'},
  {path:'connexion',component:ConnexionComponent},
  {path:'admin', component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
