import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form implements OnInit{
  id = ''
  constructor(private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
  }
}
