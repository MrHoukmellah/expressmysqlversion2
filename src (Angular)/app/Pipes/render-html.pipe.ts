/** import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  

@Pipe({
  name: 'renderHTML'
})
export class RenderHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
	

  transform(content: string, type: string = 'html'): SafeHtml | SafeUrl | SafeResourceUrl {
    switch (type) {
    case 'html':
      return this.sanitizer.bypassSecurityTrustHtml(content);
    case 'url':
      return this.sanitizer.bypassSecurityTrustUrl(content);
    case 'resourceUrl':
      return this.sanitizer.bypassSecurityTrustResourceUrl(content);
    default:
      throw new Error(`Unable to bypass security for invalid type: ${type}`);
  }
}
}
*/
