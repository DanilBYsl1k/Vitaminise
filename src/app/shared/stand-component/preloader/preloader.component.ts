import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vtm-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreloaderComponent {
  @Input() label: string;
}
