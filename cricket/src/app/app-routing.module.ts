import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { Display1Component } from './display1/display1.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { LoginComponent } from './login/login.component';
import { PlayerdbComponent } from './playerdb/playerdb.component';
import { SearchComponent } from './search/search.component';
import { Search1Component } from './search1/search1.component';
import { TdeleteComponent } from './tdelete/tdelete.component';
import { TdisplayComponent } from './tdisplay/tdisplay.component';
import { Tdisplay1Component } from './tdisplay1/tdisplay1.component';
import { TinsertComponent } from './tinsert/tinsert.component';
import { TsearchComponent } from './tsearch/tsearch.component';
import { Tsearch1Component } from './tsearch1/tsearch1.component';
import { TupdateComponent } from './tupdate/tupdate.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"insert",component:InsertComponent},
  {path:"display",component:DisplayComponent},
  {path:"display1",component:Display1Component},
  {path:"update",component:UpdateComponent},
  {path:"delete",component:DeleteComponent},
  {path:"search",component:SearchComponent},
  {path:"search1",component:Search1Component},
  {path:"gallery",component:GalleryComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:LoginComponent},
  {path:"guest",component:GuestComponent},
  {path:"playerdb",component:PlayerdbComponent},
  {path:"tinsert",component:TinsertComponent},
  {path:"tupdate",component:TupdateComponent},
  {path:"tdelete",component:TdeleteComponent},
  {path:"tdisplay",component:TdisplayComponent},
  {path:"gallery1",component:Gallery1Component},
  {path:"tdisplay1",component:Tdisplay1Component},
  {path:"tsearch",component:TsearchComponent},
  {path:"tsearch1",component:Tsearch1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
