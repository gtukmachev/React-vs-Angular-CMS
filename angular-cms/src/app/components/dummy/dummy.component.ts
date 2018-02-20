import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: '{{value}}',
})
export class DummyComponent{

  constructor() { }

  @Input() value: any;
}
