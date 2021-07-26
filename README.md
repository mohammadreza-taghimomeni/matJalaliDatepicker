Persian/Jalaali Datepicker By Angular Material
============================
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

We use Angular Material Components to make this Persian/Jalaali datepicker 

### Important Persian/Jalaali Datepicker Files

    .
    ├── src                             
    │   ├── app                         
    │   │   ├── app.component.html      # Example of use Persian/Jalaali Datepicker
    │   │   ├── app.component.ts        
    │   │   └── app.module.ts           # Import module to your project
    │   └── datepicker                  # Copy this folder to your project
    └── README.md


## Getting Started with Persian/Jalaali datepicker

This guide explains how to set up your Angular project to begin using Persian/Jalaali datepicker. It includes information on prerequisites, installing Angular Material, and optionally displaying a sample material component in your application to verify your setup.

#### 1.Install Angular Material

Use the Angular CLI's installation schematic to set up your Angular Material project by running the following command:

```
$ ng add @angular/material
```

#### 2.Copy Datepicker Folder

Copy [datepicker](https://github.com/mrmtm95/matJalaliDatepicker/tree/main/src/datepicker) folder to your project.

#### 3.Add Module to Your Project

Use this line in your app.module.ts and you can use of this datepicker in your app.

```ts

//============ [ Angular Material Module ] ============ 
import { MatDatepickerModule,MatDateRangePicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';

//============ [ Custom Module ] ============ 
import { JalaliMomentDateAdapter } from "../datepicker/jalali-moment-date-adapter";
import { JALALI_MOMENT_FORMATS, MOMENT_FORMATS } from "../datepicker/jalali_moment_formats";
import { MomentDateModule } from '../datepicker/moment-date.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    *,
    *,
    *,
    //============ [ Add Imports to Your Module ] ============ 
    FormsModule,
    MatIconModule,
    MatInputModule,
    OverlayModule,
    MatMomentDateModule,
    MomentDateModule,
    MatDatepickerModule,
    *,
    *,
    *
  ],
  providers: [  
    //============ [ Add Providers to Your Module ] ============ 
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
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Example

You can use all example of Angular Material datepicker. So visit [datepicker example](https://material.angular.io/components/datepicker/examples)
and enjoy of it