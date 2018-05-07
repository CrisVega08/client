import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PipesModule } from './pipes/pipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StarsComponent } from './stars/stars.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarsComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
