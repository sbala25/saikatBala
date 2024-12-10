import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiManagerService } from '../../../service/api-manager.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-edit-experience',
  imports: [MatFormFieldModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, ReactiveFormsModule, MatDatepickerModule,MatCheckboxModule,FormsModule, MatInputModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-edit-experience.component.html',
  styleUrl: './add-edit-experience.component.scss'
})
export class AddEditExperienceComponent implements OnInit {

  currentItem = inject(MAT_DIALOG_DATA);
  isCurrentCompany = signal<boolean>(false);
  maxDate = new Date();
  experienceForm: any;

  constructor(
    private _dialogRef: MatDialogRef<AddEditExperienceComponent>,
    private _apiManager: ApiManagerService
  ) { }

  ngOnInit(): void {
    this.experienceForm = new FormGroup({
      experience_id: new FormControl(null),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl(''),
      designation: new FormControl('', Validators.required),
      company_name: new FormControl('', Validators.required),
      office_city: new FormControl(''),
      office_country: new FormControl(''),
      skills: new FormControl(''),
      tools: new FormControl(''),
      work_description: new FormControl(''),
      company_logo: new FormControl(''),
      user_id: new FormControl('1234', Validators.required),
      email: new FormControl('saikat.bala25@gmail.com', Validators.required),
      last_updated: new FormControl(new Date(), Validators.required),
      last_updated_by: new FormControl('1234', Validators.required),
    },
      // [this._validation.validateDeliveryDate(this.experienceForm.get("start_date").value,this.experienceForm.get("end_date").value)]
    );
    this.maxDate.setMonth(this.maxDate.getMonth() + 1);
    if (this.currentItem) {
      this.experienceForm.patchValue(this.currentItem);
      if (!this.currentItem.end_date) {
        this.isCurrentCompany.update(() => true);
        this.experienceForm.get("end_date")?.disable();
      }
    }
  }

  saveExperience() {
    if (!this.experienceForm.valid) {
      console.log("invalid", this.experienceForm.value);
      this.experienceForm.markAllAsTouched();
      return;
    }
    if (this.currentItem) {
      this._apiManager.putRequest("experience", this.experienceForm.value).subscribe(res => {
        console.log(res);
        this._dialogRef.close(true);
      })
    } else {
      this._apiManager.postRequest("experience", this.experienceForm.value).subscribe(res => {
        console.log(res);
        this._dialogRef.close(true);
      })
    }
  }

  currentlyWorkingUpdate(e: any) {
    const end_date = this.experienceForm.get("end_date");
    if (e.checked) {
      end_date?.setValue(null);
      end_date?.disable();
    } else {
      end_date?.enable();
    }
  }
  test() {
    console.log(this.experienceForm.get("start_date").value);
    console.log(this.experienceForm.value);
  }

  onNoClick(): void {
    this._dialogRef.close();
  }
}