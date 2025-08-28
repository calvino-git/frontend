import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../../core/services/authentication';
import {User} from '../../models/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string = "";
  constructor(private router: Router, private authService: AuthenticateService) {
  }
  ngOnInit(): void {
  }
  submit(data: User) {
    this.authService.register(data).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
