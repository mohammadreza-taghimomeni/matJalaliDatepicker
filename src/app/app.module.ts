import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';

import { JalaliMomentDateAdapter } from "../datepicker/jalali-moment-date-adapter";
import { JALALI_MOMENT_FORMATS, MOMENT_FORMATS } from "../datepicker/jalali_moment_formats";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MomentDateModule } from '../datepicker/moment-date.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    MatIconModule,
    MatInputModule,

    OverlayModule,
    MatMomentDateModule,
    MomentDateModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: "fa" }, // en-GB  fr
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (locale: string) => {
        if (locale === "fa") {
          return JALALI_MOMENT_FORMATS;
        } else {
          return MOMENT_FORMATS;
        }
      },
      deps: [MAT_DATE_LOCALE]
      // useValue: JALALI_MOMENT_FORMATS
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
