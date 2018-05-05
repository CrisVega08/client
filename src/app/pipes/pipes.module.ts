import { NgModule } from '@angular/core';

import { ImagesPipe, PipeUrlImagen } from './images.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagesPipe,
    PipeUrlImagen
  ],
  exports: [
    ImagesPipe,
    PipeUrlImagen
  ]
})
export class PipesModule { }
