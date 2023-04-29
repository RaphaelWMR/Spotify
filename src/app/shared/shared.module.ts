import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayeComponent } from './components/media-playe/media-playe.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
