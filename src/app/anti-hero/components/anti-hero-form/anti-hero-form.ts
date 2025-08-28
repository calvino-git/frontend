import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';


interface NgOnInit {
}

@Component({
  selector: 'app-anti-hero-form',
  templateUrl: './anti-hero-form.html',
  styleUrls: ['./anti-hero-form.css']
})
export class AntiHeroForm implements OnInit {
  @Input()
  selectedId = '';
  actionButtonLabel = 'Create';
  antiHeroForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.antiHeroForm = this.fb.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      knownAs : [''],
      house : ['']
    })
  }
  ngOnInit(): void {
    this.checkAction();
  }

  checkAction(){
    if(this.selectedId){
      this.actionButtonLabel = "Update";

    }
  }
  patchDataValues(){

  }
  emitAction(){

  }
  clear(){
    this.antiHeroForm.reset()
  }
}
