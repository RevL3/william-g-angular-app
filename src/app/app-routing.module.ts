import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchStartComponent } from './search/search-start/search-start.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'search', component: SearchComponent, children: [
    {path: '', component: SearchStartComponent},
    {path: 'search-results', component: SearchResultsComponent}
  ] },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
