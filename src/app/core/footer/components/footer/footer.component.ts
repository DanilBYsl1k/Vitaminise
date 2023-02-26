import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vtm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  regularExsp = /^(?:\b\w+\b[\s]*){8,}$/;
  formLetter: FormGroup;
  ngOnInit(): void {
    this.formLetter = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      letter: ['', [Validators.required, Validators.pattern(this.regularExsp)]],
    });
  }
  onSubmit() {
    console.log(this.formLetter.value);
    this.formLetter.reset();
  }
}
