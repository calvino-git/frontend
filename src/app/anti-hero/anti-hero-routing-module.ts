import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { List } from './pages/list/list';
import { Form } from './pages/form/form';
import { AntiHeroList } from "./components/anti-hero-list/anti-hero-list";

const routes: Routes = [
  {
    path: '',
    component: List,
  },
  {
    path: 'form',
    component: Form,
  }
];

@NgModule({
  declarations: [List, Form],
  imports: [
    RouterModule.forChild(routes),
    AntiHeroList
],
  exports: [RouterModule]
})
export class AntiHeroRoutingModule { }
