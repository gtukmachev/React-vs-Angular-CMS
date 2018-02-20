import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TextComponent } from './components/text-component/text-component.component';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { ComponentsFactoryService } from './configurations/components-factory.service';
import { DummyComponent } from './components/dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    Layout1Component,
    DummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ComponentsFactoryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TextComponent,
    Layout1Component,
    DummyComponent
  ]
})
export class AppModule { }
