import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { EmpresaComponent } from './detalle/empresa/empresa.component';
import { MenbresiaComponent } from './detalle/menbresia/menbresia.component';

import { TablaComponent } from './detalle/empresa/tabla/tabla.component';
import { SidebarComponent } from './detalle/empresa/sidebar/sidebar.component';
import { TablaMComponent } from './detalle/menbresia/tabla-m/tabla-m.component';
import { SidebarMComponent } from './detalle/menbresia/sidebar-m/sidebar-m.component';

import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenbresiaComponent,
    TablaComponent,
    SidebarComponent,
    TablaMComponent,
    SidebarMComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
