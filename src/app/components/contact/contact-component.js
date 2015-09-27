import { Component, View, NgFor } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { Inject } from 'angular2/angular2';
import { DataService } from '../../services/data-service';
import { Sorter } from '../../utils/sorter';
import { FilterTextboxComponent } from '../filter-textbox/filter-textbox-component';
import { SortByDirective } from '../../directives/sortby/sortby-directive';
import { CurrencyPipe } from '../../pipes/currency-pipe';

@Component({ selector: 'contact' , bindings: [DataService] })
@View({
  templateUrl: 'app/components/contact/contact-component.html',
  directives: [NgFor, FilterTextboxComponent, SortByDirective],
  pipes: [CurrencyPipe]
})
export class ContactComponent {

  

}


