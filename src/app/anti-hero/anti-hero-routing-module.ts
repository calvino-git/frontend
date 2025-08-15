import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './pages/list/list';
import { Form } from './pages/form/form';
import { AntiHeroList } from "./components/anti-hero-list/anti-hero-list";
import {MaterialModule} from '../material/material-module';
import {AntiHeroCommandBar} from './components/anti-hero-command-bar/anti-hero-command-bar';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AntiHeroModule} from "./anti-hero-module";
import {AntiHeroForm} from './components/anti-hero-form/anti-hero-form';


const routes: Routes = [
  {
    path: '',
    component: List,
  },
  {
    path: 'form',
    children: [
      {
        path: ':id',
        component: Form,
      },
      {
        path: '',
        component: Form,
      }
    ]
  }
];

@NgModule({
  declarations: [List, Form],
    imports: [
        RouterModule.forChild(routes),
        AntiHeroList,
        AntiHeroForm,
        MaterialModule,
        AntiHeroCommandBar,
        FormsModule,
        ReactiveFormsModule,
    ],
  exports: [RouterModule,
    MaterialModule]
})
export class AntiHeroRoutingModule { }
