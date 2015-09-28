import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ContactComponent } from '../contact/contact-component';
import { UsersComponent } from '../users/users-component';
import { DataService } from 'app/services/data-service';
//import { Header } from '../shared/header/header'

@Component({ selector: 'app' })
@View({
  templateUrl: 'app/components/app/app-component.html',
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'users', component: UsersComponent },
  { path: '/contact', as: 'contact', component: ContactComponent },
  { path: '/users', as: 'users', component: UsersComponent }
])
export class AppComponent {

}
