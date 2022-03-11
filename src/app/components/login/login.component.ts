import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['zard', [Validators.required]],
      password: ['zard', [Validators.required]],
      remember: [true]
    });
  }

  jump(){
    this.router.navigate(['dashboard']);
  }
  
}
