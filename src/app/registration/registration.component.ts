import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
email: string='';
name: string='';
password: string='';

constructor(private router:Router){}

onSubmit():void{
const userData={email:this.email,name:this.name,password:this.password};
console.log(userData);
let temp=localStorage.getItem('angusers')
let storedData:any[]=[];

if(temp){
  try{
    storedData=JSON.parse(temp);
  }catch(err){
  console.error(err);
  return;
  }
}
if (!Array.isArray(storedData)) {
  storedData = []; // Reset storedData if it's not an array
}

localStorage.setItem('curruser',JSON.stringify(userData));
storedData.unshift(userData);

localStorage.setItem('angusers',JSON.stringify(storedData));
alert('User registed succesfully');
this.router.navigate(['/login']);
}

}
