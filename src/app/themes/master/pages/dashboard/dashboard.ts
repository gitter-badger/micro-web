import {Component, View, bootstrap} from 'angular2/angular2';

import {Header} from '../../../../components/shared/header/header'
import {LeftMenu} from '../../../../components/dashboard/left-menu/left-menu'

@Component({
  selector: 'dashboard'
})

@View({
  templateUrl: './themes/master/pages/dashboard/dashboard.html',
  directives: [Header, LeftMenu]
})
export class Dashboard {

}