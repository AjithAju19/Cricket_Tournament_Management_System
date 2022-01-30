import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbutilityService } from './dbutility.service';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { HttpClientModule } from '@angular/common/http'
import { PlayerdbComponent } from './playerdb/playerdb.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { Search1Component } from './search1/search1.component';
import { Display1Component } from './display1/display1.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TinsertComponent } from './tinsert/tinsert.component';
import { TupdateComponent } from './tupdate/tupdate.component';
import { TdeleteComponent } from './tdelete/tdelete.component';
import { TdisplayComponent } from './tdisplay/tdisplay.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Tdisplay1Component } from './tdisplay1/tdisplay1.component';
import { TsearchComponent } from './tsearch/tsearch.component';
import { Tsearch1Component } from './tsearch1/tsearch1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertComponent,
    PlayerdbComponent,
    DisplayComponent,
    UpdateComponent,
    DeleteComponent,
    SearchComponent,
    LoginComponent,
    GuestComponent,
    Search1Component,
    Display1Component,
    GalleryComponent,
    TinsertComponent,
    TupdateComponent,
    TdeleteComponent,
    TdisplayComponent,
    Gallery1Component,
    Tdisplay1Component,
    TsearchComponent,
    Tsearch1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [DbutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
