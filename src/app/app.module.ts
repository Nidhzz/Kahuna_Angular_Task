import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { TitleCaseDirective } from './title-case.directive';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { GenderIconDirective } from './gender-icon.directive';
import { DatePipe } from '@angular/common';
import { FemaleGenderIconDirective } from './female-gender-icon.directive';

const routes: Routes = [
  { path: 'userDetails', component: UserDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailsComponent,
    TitleCaseDirective,
    GenderIconDirective,
    FemaleGenderIconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
