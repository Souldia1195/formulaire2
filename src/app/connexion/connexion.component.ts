import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, RequiredValidator, Validators } from '@angular/forms';
import{ Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-connexion/connexion.component.html/',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: false = false;


  constructor(private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password :['', Validators.required]
    });
  }
  get formControls(){ return this.loginForm.controls;}
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted= false;
    if(this.loginForm.invalid){
      return;
    }
this.authService.seConnecter(this.loginForm.value);
this.router.navigateByUrl('/admin');
  }

}
