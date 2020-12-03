import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonFormComponent} from './person/person-form/person-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorErrorMessageDirective} from './general/validator-error-message.directive';
import {ErrorMessageComponent} from './general/error-message/error-message.component';
import {PersonListComponent} from './person/person-list/person-list.component';
import {EmployeeTypePipe} from './general/pipe/employee-type-pipe';
import {PersonComponent} from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    ValidatorErrorMessageDirective,
    ErrorMessageComponent,
    PersonListComponent,
    EmployeeTypePipe,
    EmployeeTypePipe,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }