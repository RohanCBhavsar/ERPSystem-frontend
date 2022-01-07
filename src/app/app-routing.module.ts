import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErpComponent } from './pages/erp/erp.component';

const routes: Routes = [
  {
    path: "Home",
    component: ErpComponent
  },
  {
    path : "**",
    pathMatch : "full",
    redirectTo : "Home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
