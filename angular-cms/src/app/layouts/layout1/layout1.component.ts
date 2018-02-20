import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentsFactoryService} from '../../configurations/components-factory.service';

@Component({
  selector: 'app-layout1',
  template: `
    <table border="{{props.border || 0}}" [ngStyle]="{'border-color': props.bordercolor}" width="80%" class="center">
      <tbody>
      <tr><td colspan=2>header: <template #header></template> </td></tr>
      <tr><td width="50%">left: <template #left></template></td><td width="50%">right: <template #right></template></td></tr>
      <tr><td colspan=2>footer: <template #footer></template></td></tr>
      </tbody>
    </table>
  `
})
export class Layout1Component implements OnInit {

  constructor(private cFactory: ComponentsFactoryService) { }

  @ViewChild('header', { read: ViewContainerRef }) header: any;
  @ViewChild('left',   { read: ViewContainerRef }) left:   any;
  @ViewChild('right',  { read: ViewContainerRef }) right:  any;
  @ViewChild('footer', { read: ViewContainerRef }) footer: any;

  props: Layout1Component_Props;

  ngOnInit() {
    this.cFactory.build(this.header, this.props.header);
    this.cFactory.build(this.left,   this.props.left);
    this.cFactory.build(this.right,  this.props.right);
    this.cFactory.build(this.footer, this.props.footer);
  }

}

interface Layout1Component_Props {
  border: number;
  bordercolor: string,
  header: CMS_Config_Component;
  left: CMS_Config_Component;
  right: CMS_Config_Component;
  footer: CMS_Config_Component;
}
