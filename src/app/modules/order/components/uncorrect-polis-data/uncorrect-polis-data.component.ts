/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  Observable,
  of,
  Subscription,
  tap,
  timer,
} from 'rxjs';
import { CheckCarService } from '../../services/check-car.service';

interface IForm {
  vin: FormControl<null | string>;
  mark: FormControl<null | string>;
  model: FormControl<null | string>;
  graduationYear: FormControl<null | string>;
  engineCapacity: FormControl<null | string>;
  stateNum: FormControl<null | string>;
  type: FormControl<null | string>;
  registrationAddress: FormControl<null | string>;
}

@Component({
  selector: 'vtm-uncorrect-polis-data',
  templateUrl: './uncorrect-polis-data.component.html',
  styleUrls: ['./uncorrect-polis-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncorrectPolisDataComponent implements OnInit {
  isLoading$ = new BehaviorSubject<boolean>(false);

  controls: IForm;
  form: FormGroup<IForm>;
  patternStateNum = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
  patternVin = /^[A-Z0-9]+$/;
  patternType = /^B[1-5]$/;
  patternModel = /[a-zA-Z]/;
  patternengineCapacity = /^\d{3,4}$/;
  patternGraduationYear = /^\d{4}$/;

  constructor(
    private fb: FormBuilder,
    private rout: Router,
    private checkCarService: CheckCarService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.controls = this.form.controls;
    // console.log(this.rout.navigate([]));
  }
  private initForm(): void {
    this.form = this.fb.group({
      vin: this.fb.control(null, [
        Validators.required,
        Validators.minLength(17),
        Validators.maxLength(17),
        Validators.pattern(this.patternVin),
      ]),
      mark: this.fb.control(null, [Validators.required]),
      model: this.fb.control(null, [
        Validators.required,
        Validators.pattern(this.patternModel),
      ]),
      graduationYear: this.fb.control(null, [
        Validators.required,
        Validators.pattern(this.patternGraduationYear),
      ]),
      engineCapacity: this.fb.control(null, [
        Validators.required,
        Validators.pattern(this.patternengineCapacity),
      ]),
      stateNum: this.fb.control(null, [
        Validators.required,
        Validators.pattern(this.patternStateNum),
      ]),
      type: this.fb.control(null, [
        Validators.required,
        Validators.pattern(this.patternType),
      ]),
      registrationAddress: this.fb.control(null, [Validators.required]),
    }) as FormGroup<IForm>;
  }
  // eslint-disable-next-line class-methods-use-this
  preShow(): void {
    of(true)
      .pipe(
        tap(() => this.isLoading$.next(true)),
        debounceTime(2000)
        // tap(() => this.isLoading$.next(false))
      )
      .subscribe();
  }
}
