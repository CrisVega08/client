import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: string, type: string = 'hotel'): any {
    const url = `${environment.url}/${type}/image/${image}`;
    if ( !image ) {
      return url + '/assets/image';
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

