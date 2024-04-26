import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
 {path:'register',component:RegistrationComponent},
 {path:'login',component:LoginComponent},
 {path:'profile',component:ProfileComponent},
 {path:'',redirectTo:'/register',pathMatch:'full'}
];
