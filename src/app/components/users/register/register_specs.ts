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
import {Register} from './register';

export function main() {
  describe('Register component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><register></register></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            var registerDOMEl = rootTC.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(registerDOMEl, 'h1')[0].textContent).toEqual('Howdy!');

            async.done();
          });
      }));
  });
};

@Component({selector: 'test-cmp'})
@View({directives: [Register]})
class TestComponent {}