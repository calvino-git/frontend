import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from '../../../core/services/authentication';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticateService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(data: { email: string, password: string }) {
    //console.log("[LoginComponent] Login with email: " + data.email + " and password: " + data.password);
    // fetch(`${environment.apiURL}/anti-heroes`)
    //   .then(response => response.json())// Convert response to JSON
    //   .then(data => console.log(data))// Handle data
    //   .catch(error => console.error("Error fetching data:", error));

    this.authService.login(data)
      .subscribe((jwtData) => {
        this.router.navigate(['/anti-heroes']);
        localStorage.setItem('token', jwtData.jwt);
        console.log(localStorage);
      });
  }
}
