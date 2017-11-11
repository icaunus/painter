import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShapesComponent } from './shapes/shapes.component';
import { DrawAreaComponent } from './drawarea/drawarea.component';
import { StatusBarComponent } from './statusbar/statusbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShapesComponent,
    DrawAreaComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
