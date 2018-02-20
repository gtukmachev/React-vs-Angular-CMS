import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-component',
  template: 'just a text component with props = "{{props}}"',
})
export class TextComponent {

  @Input() props: any;

  constructor() { }

}
