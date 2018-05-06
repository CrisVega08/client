import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: string, type: string = 'hotel'): any {

    const url = `http://localhost:3001/${type}/image/${image}`;
    if ( !image ) {
      return url + '/usuario/xxx';
    }

    return url;
  }
}

@Pipe({ name: 'safeImage' })
export class PipeUrlImagen implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(url): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

