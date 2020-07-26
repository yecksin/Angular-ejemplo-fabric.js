import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploBaseComponent } from './ejemplo-base/ejemplo-base.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EditFabricComponent } from './edit-fabric/edit-fabric.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploBaseComponent,
    NavComponent,
    FooterComponent,
    EditFabricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
