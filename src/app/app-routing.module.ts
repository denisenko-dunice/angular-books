import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CustomBookComponent } from './custom-book/custom-book.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'navigation', component: NavBarComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: TableComponent, data: { animation: 'Table' } },
      { path: 'custom', component: CustomBookComponent, data: { animation: 'Custom' } }
    ]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
