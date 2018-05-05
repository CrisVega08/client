import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PipesModule } from './pipes/pipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { StarsComponent } from './stars/stars.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    StarsComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
