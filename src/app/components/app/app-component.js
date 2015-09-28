import { Component, View } from 'angular2/angular2';
import { RouterOutlet, RouteConfig } from 'angular2/router';
import { Home } from 'app/themes/master/pages/home/home';
import { Dashboard } from 'app/themes/master/pages/dashboard/dashboard';

@Component({ selector: 'app' })

@View({
  templateUrl: 'app/components/app/app-component.html',
  directives: [RouterOutlet],
})

@RouteConfig([
  { path: '/', as: 'home', component: Home },
  { path: '/dashboard/...', as: 'dashboard', component: Dashboard }
])

export class AppComponent {

}

