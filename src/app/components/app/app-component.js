import { Component, View } from 'angular2/angular2';
import { RouterOutlet, RouteConfig } from 'angular2/router';
import { ContactComponent } from '../contact/contact-component';
import { UsersComponent } from '../users/users-component';
import { DashboardComponent } from '../dashboard/dashboard-component';
// import { ReportsComponent } from '../dashboard/reports/reports-component';
import { DataService } from 'app/services/data-service';
//import { Header } from '../shared/header/header'

@Component({ selector: 'app' })
@View({
  templateUrl: 'app/components/app/app-component.html',
  directives: [RouterOutlet],
})
@RouteConfig([
  { path: '/', as: 'users', component: UsersComponent },
  { path: '/contact', as: 'contact', component: ContactComponent },
  { path: '/users', as: 'users', component: UsersComponent },
  { path: '/dashboard/...', as: 'dashboard', component: DashboardComponent }
   // , { path: '/dashboard/reports', as: 'reports', component: ReportsComponent }
])
export class AppComponent {

}
// bootstrap(AppComponent);
