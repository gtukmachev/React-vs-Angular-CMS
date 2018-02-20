import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {rootConfig} from './configurations/root-config';
import {ComponentsFactoryService} from './configurations/components-factory.service';
import {subConfig} from './configurations/sub-config';
//import {subConfig} from './configurations/sub-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  @ViewChild('root1', { read: ViewContainerRef }) rootComponent1: any;
  @ViewChild('root2', { read: ViewContainerRef }) rootComponent2: any;

  constructor(private cFactory: ComponentsFactoryService) { }

  ngOnInit(): void {
    this.cFactory.build(this.rootComponent1, rootConfig.root);
    this.cFactory.build(this.rootComponent2, subConfig.root);
  }

}
