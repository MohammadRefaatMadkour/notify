import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxIntlTelInputModule } from 'projects/ngx-intl-tel-input/src/lib/ngx-intl-tel-input.module';
// import { NgScrollCalendarModule } from 'ng-scroll-calendar';

import { HomePage } from './home.page';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    // NgScrollCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
