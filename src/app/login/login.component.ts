import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {};
  loginForm? : FormGroup;
  connectedUser:any
  adminIsConnected: boolean;
  sessionRole: string | null;
  constructor(private formBuilder : FormBuilder, private userService : UserService, private router : Router) { }

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email :  [''],
      password :  [''],
    })

    
  }

  login(){
    this.userService.login(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        console.log(data.connectedUser);

        this.connectedUser = data.connectedUser;
        // Les données sont correctes
        if (this.connectedUser) {
          // stockage de l'utilisateur connecté dans LocalStorage
          localStorage.setItem("connectedUser",JSON.stringify(data.connectedUser))
          this.router.navigate(["/acceuil"]);

          //localStorage.setItem("adminConnectedId", data.connectedUser._id)
          // Redirection
          //switch (this.connectedUser.role) {
           // case 'admin':
            //  this.router.navigate(['dashboardAdmin'])
             // break;

             // case 'membre':
              //  this.router.navigate(['dashboardUser'])

             // break;
           
          //}

        }
      }
    )
  }


}
