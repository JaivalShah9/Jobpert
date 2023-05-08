import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
  
})
@Injectable()
export class LogInComponent {

    email: string|undefined;
   password: string|undefined; 
   
   
   loginForm: FormGroup | any;
  constructor(
    private router:Router,
    private http:HttpClient

    
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }
   ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',(JSON.stringify(this.loginForm.value)))
    this.router.navigate(['/landing'])

    
  }
   loginUser(){

        this.http.post<any>("/groceries/posting",{
          item:"wine",
          quantity:24
        } ).subscribe(data =>{
          console.log(data)
        })

    console.log("this is getting executed")

    if( this.loginForm.value.email== "admin@gmail.com" && this.loginForm.value.password=="Jaival-9" || this.loginForm.value.email== "jaival@gmail.com" && this.loginForm.value.password== "Jaival-99")


    {
      
      console.log("success")
      this.router.navigate(['/first'])
      
    }
    else{
      alert("error")
    }
  }
 
  
}
