import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'



import { AppComponent } from './app.component';
import { SearchUsersComponent } from './user-lookup/user-lookup.component';
import { SearchUsersService } from './user-lookup.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [SearchUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
