import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { MaterialModule } from "../material/material-module";
import {ReactiveFormsModule} from '@angular/forms';
import {PipeOne} from './pipes/pipe-one/pipe-one';
import {DirectiveOne} from './directives/directive-one/directive-one';



@NgModule({
  declarations: [
    Navbar, Footer, PipeOne, DirectiveOne
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
],
  exports: [
    Navbar, Footer
  ],
})
export class SharedModule { }
