import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { MaterialModule } from "../material/material-module";



@NgModule({
  declarations: [
    Navbar, Footer
  ],
  imports: [
    CommonModule,
    MaterialModule
],
  exports: [
    Navbar, Footer
  ],
})
export class SharedModule { }
