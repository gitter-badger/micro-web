import { Component, View, bootstrap, bind, CORE_DIRECTIVES, Inject} from 'angular2/angular2';
import {   Redirect,
Route,
Router,
RouteConfig,
RouterOutlet,
RouterLink,
LocationStrategy,
HashLocationStrategy,
ROUTER_BINDINGS } from 'angular2/router';
import { Home } from 'app/themes/master/pages/home/home';
import { Dashboard } from 'app/themes/master/pages/dashboard/dashboard';

@Component({ selector: 'app' })

@View({
  templateUrl: 'app/components/app/app-component.html',
  directives: [RouterOutlet, RouterLink],
})

@RouteConfig([
  { path: '/home', as: 'home', component: Home },
  { path: '/dashboard/...', as: 'dashboard', component: Dashboard },
  {path: '', redirectTo: 'home'}
])

export class AppComponent {

}