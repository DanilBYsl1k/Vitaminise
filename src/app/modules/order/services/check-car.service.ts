import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckCarService {
  isLoad$ = false;
  preObs = new Observable((sub) => {
    sub.next((this.isLoad$ = true));
    setTimeout(() => {
      sub.next((this.isLoad$ = false));
      sub.complete();
    }, 4000);
  });
  // eslint-disable-next-line class-methods-use-this
  getPreload(rp: boolean) {
    // let aboba: boolean = true;
    // eslint-disable-next-line no-new
    this.preObs.subscribe({
      next(x) {
        // this.aboba = x;
      },
    });
    // bd = rp;
    return rp;
  }
}
