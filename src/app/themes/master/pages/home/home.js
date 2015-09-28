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

@Component({
  selector: 'home'
})
@View({
  templateUrl: 'app/themes/master/pages/home/home.html',
  styleUrls: ['app/themes/master/pages/home/home.css'],
  directives: [RouterOutlet, RouterLink]
})
export class Home { }