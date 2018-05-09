import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PipesModule } from '../pipes/pipes.module';


import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from './header/header.component';
import { StarsComponent } from './stars/stars.component';
import { HotelsComponent } from './hotels/hotels.component';

import { CrudService } from '../services/crud.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ],
  declarations: [
    FiltersComponent,
    HeaderComponent,
    StarsComponent,
    HotelsComponent
  ],
  exports: [
    FiltersComponent,
    HeaderComponent,
    StarsComponent,
    HotelsComponent
  ],
  providers: [
    CrudService
  ]
})
export class ComponentsModule { }
