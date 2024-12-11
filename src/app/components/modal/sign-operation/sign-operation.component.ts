import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AppDataService } from '../../../service/appData/app-data.service';

@Component({
  selector: 'app-sign-operation',
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './sign-operation.component.html',
  styleUrl: './sign-operation.component.scss'
})
export class SignOperationComponent {

  
  signinForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  isError = signal<string>("");

  constructor(
    protected _appData:AppDataService,
    private _dialogRef:MatDialogRef<SignOperationComponent>
  ){}
  
  onNoClick(): void {
    this._dialogRef.close();
  }
  signin(): void{
    if(this.signinForm.invalid){
      this.signinForm.markAllAsTouched();
      return;
    }
    let newValue =  this.signinForm.value;
    if(newValue.username == "saikat.bala25@gmail.com", newValue.password=="12345"){
      this._appData.isAdmin.next(true);
      this.onNoClick();
    }
    else{
      this.isError.update(()=>"Unable to sign in.");
      console.log(this.isError());
    }

  }
}
