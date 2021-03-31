import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomComponent } from './components/room/room.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, RoomComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
