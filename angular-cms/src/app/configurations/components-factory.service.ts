import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {DummyComponent} from '../components/dummy/dummy.component';

@Injectable()
export class ComponentsFactoryService {

  constructor(private resolver: ComponentFactoryResolver) { }

  build(container: ViewContainerRef, settingItem: CMS_Config_Component): ComponentRef<any> | null {

    if (settingItem == null) {
      return null;
    }

    if ( typeof settingItem === 'number' || typeof settingItem === 'boolean' ) {
      return this.makeComponent(container, 'DummyComponent', settingItem );
    }

    if (settingItem.comp == null) {
      return null;
    }


    if ( typeof settingItem.comp === 'number' || typeof settingItem.comp === 'boolean' ) {
      return this.makeComponent(container, 'DummyComponent', settingItem.comp );
    }

    return this.makeComponent(container, settingItem.comp, settingItem.props || {} );
  }

  private makeComponent(container: ViewContainerRef, componentClassName: string, props: any): ComponentRef<any> | null {
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentClassName);
    const factory = this.resolver.resolveComponentFactory(factoryClass);

    const componentRef = container.createComponent(factory);
    componentRef.instance.props = props;

    return componentRef;
  }

}
