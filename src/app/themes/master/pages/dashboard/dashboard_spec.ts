import {
  AsyncTestCompleter,
  TestComponentBuilder,
  By,
  beforeEach,
  ddescribe,
  describe,
  el,
  expect,
  iit,
  inject,
  it,
  xit,
} from 'angular2/test';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {Dashboard} from './dashboard';

export function main() {
  describe('Dashboard component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><dashboard></dashboard></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            var dashboardDOMEl = rootTC.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(dashboardDOMEl, 'h1')[0].textContent).toEqual('Howdy!');

            async.done();
          });
      }));
  });
};

@Component({selector: 'test-cmp'})
@View({directives: [Dashboard]})
class TestComponent {}