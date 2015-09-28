import { Component, View, NgFor } from 'angular2/angular2';
import { RouterOutlet, RouteConfig } from 'angular2/router';
import { ReportsComponent } from './reports/reports-component';

@Component({ selector: 'dashboard' })
@View({
  templateUrl: 'app/components/dashboard/dashboard-component.html',
  directives: [RouterOutlet]
})

@RouteConfig([
  { path: '/reports', as: 'reports', component: ReportsComponent},
   { path: '/', as: 'dashboard', component: ReportsComponent}
])

export class DashboardComponent {

}


