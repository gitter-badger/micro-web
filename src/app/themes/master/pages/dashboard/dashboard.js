import {Component, View, bootstrap} from 'angular2/angular2';
import {  Redirect,
Route,
Router,
RouteConfig,
RouterOutlet,
RouterLink,
LocationStrategy,
HashLocationStrategy,
ROUTER_BINDINGS,
routerInjectables} from 'angular2/router';

import { ContactComponent } from 'app/components/contact/contact-component';
import { Home } from 'app/components/dashboard/home/home';
@Component({
  selector: 'dashboard'
})
@RouteConfig([
  { path: '/contact', as: 'contact', component: ContactComponent },
  { path: '/home', as: 'home', component: Home },
  { path: '/', as: 'home', component: Home }
])
@View({
  templateUrl: 'app/themes/master/pages/dashboard/dashboard.html',
		directives: [RouterOutlet, RouterLink]

})
export class Dashboard {

}