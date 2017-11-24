import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'



import { AppComponent } from './app.component';
import { UserLookupComponent } from './user-lookup/user-lookup.component';
import { UserLookupService } from './user-lookup.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [UserLookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
