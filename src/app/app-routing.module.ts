import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'sales', component: SectionSalesComponent},
  {path: 'orders', component: SectionOrdersComponent},
  {path: 'health', component: SectionHealthComponent},
  //cala sciezka ma sie zgadzac, moze tez byc prefix czyli szuka matching child routes
  {path: '', redirectTo: '/sales', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
