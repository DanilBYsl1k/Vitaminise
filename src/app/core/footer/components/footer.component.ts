import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vtm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FooterComponent {
  formLetter:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    letter: new FormControl('', [Validators.required]),
  });
}
