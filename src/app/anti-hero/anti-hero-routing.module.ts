import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {List} from './pages/list/list';
import {Form} from './pages/form/form';


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
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AntiHeroRoutingModule {
}
