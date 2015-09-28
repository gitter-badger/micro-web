import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, routerInjectables} from 'angular2/router';

import { ContactComponent } from 'app/components/contact/contact-component';
import { UsersComponent } from 'app/components/users/users-component';
@Component({
	selector: 'dashboard'
})
@RouteConfig([
  { path: '/contact', as: 'contact', component: ContactComponent}
])
@View({
	templateUrl: 'app/themes/master/pages/dashboard/dashboard.html',
	directives: [RouterOutlet]
})
export class Dashboard {

}