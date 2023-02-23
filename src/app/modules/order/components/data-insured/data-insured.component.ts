import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vtm-data-insured',
  templateUrl: './data-insured.component.html',
  styleUrls: ['./data-insured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInsuredComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.form = this.fb.group({
      fullName: this.fb.control(null),
      dateBorn: this.fb.control(null),
      phone: this.fb.control(null),
      email: this.fb.control(null),
      // fullName: this.fb.control(null),
      // fullName: this.fb.control(null),
      // fullName: this.fb.control(null),
    });
  }
}
