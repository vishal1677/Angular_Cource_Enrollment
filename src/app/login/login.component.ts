import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email:string ='';
password:string='';

constructor(private router:Router){};

onSubmit():void{
const storedData=localStorage.getItem('angusers');
if(!storedData){
  alert('Please register first');
  this.router.navigate(['/register']);
}
let data:any[];
console.log(storedData);
data=storedData ? JSON.parse(storedData) : [];
console.log('data 2',data);
let flag=false;

data.forEach((user)=>{
console.log(user.email);
if(user.email === this.email && user.password === this.password){
  localStorage.setItem('curruser',JSON.stringify(user));
  alert('Login Successful !');
  this.router.navigate(['/profile']);
  flag=true;
  return;
}
});

if(!flag){
alert('Please enter valid ');
}

}

}
