import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UtilsService } from '../../../service/utils.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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
    protected _utils:UtilsService,
    private _dialogRef:MatDialogRef<SignOperationComponent>
  ){
    // this._dialogRef.disableClose = true;
  }
  
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
      this._utils.isAdmin.next(true);
      this.onNoClick();
    }
    else{
      this.isError.update(()=>"Unable to sign in.");
      console.log(this.isError());
    }

  }
}
