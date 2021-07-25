import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { JalaliMomentDateAdapter } from "./jalali-moment-date-adapter";

export * from './jalali-moment-date-adapter';
export * from './jalali_moment_formats';

@NgModule({
  providers: [
    {provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [MAT_DATE_LOCALE]}
  ],
})
export class MomentDateModule {}