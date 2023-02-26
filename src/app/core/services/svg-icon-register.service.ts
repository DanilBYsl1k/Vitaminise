import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SvgIconRegisterService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerIcons(icons: string[]): void {
    this.loadIcons(icons, 'assets/images/svg');
  }

  private loadIcons(icons: string[], iconUrl: string): void {
    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconUrl}/${icon}.svg`
        )
      );
    });
  }
}
