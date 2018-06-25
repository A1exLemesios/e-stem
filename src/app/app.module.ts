import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { MaterialModule }  from './material.module';
import { ILearnComponent }  from './i-learn/i-learn.component';
import { MenuComponent }  from './menu/menu.component';
import { LoginComponent }  from './login/login.component';
import { AppRoutingModule }  from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule ,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ILearnComponent,
    MenuComponent,
    LoginComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
