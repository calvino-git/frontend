import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiHeroRoutingModule } from './anti-hero-routing-module';
import { AntiHeroList } from './components/anti-hero-list/anti-hero-list';
import { AntiHeroForm } from './components/anti-hero-form/anti-hero-form';
import { List } from './pages/list/list';
import { Form } from './pages/form/form';



@NgModule({
  declarations: [
    AntiHeroForm,
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    AntiHeroList
  ]
})
export class AntiHeroModule { }
