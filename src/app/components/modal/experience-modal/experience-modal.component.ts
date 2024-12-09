import { Component, computed, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter, provideNativeDateAdapter} from '@angular/material/core';
import { ApiManagerService } from '../../../service/api-manager.service';

@Component({
  selector: 'app-experience-modal',
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './experience-modal.component.html',
  styleUrl: './experience-modal.component.scss'
})
export class ExperienceModalComponent implements OnInit{


  experienceForm = new FormGroup({ 
    experience_id: new FormControl(null),
    start_date: new FormControl('',Validators.required),
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
    email: new FormControl('saikat.bala25@gmail.com',Validators.required),
    last_updated: new FormControl(new Date(),Validators.required),
    last_updated_by: new FormControl('1234',Validators.required),
  });
  @Output() closeModal = new EventEmitter<any>();
  @Input() currentItem:any = null;
  isCurrentCompany = signal<boolean>(false);
  maxDate = new Date();

  constructor(private _apiManager:ApiManagerService){}

  ngOnInit(): void {
    this.maxDate.setMonth(this.maxDate.getMonth() + 1);
    if(this.currentItem){
      this.experienceForm.patchValue(this.currentItem);
      if(!this.currentItem.end_date){
        this.isCurrentCompany.update(()=>true);
        this.experienceForm.get("end_date")?.disable();
      }
    }
  }

  onExperienceSubmit(){
    if(!this.experienceForm.valid){
      console.log("invalid", this.experienceForm.value);
      return;
    }
    if(this.currentItem){
      this._apiManager.putRequest("experience", this.experienceForm.value).subscribe(res=>{
        console.log(res);
        this.closeModal.emit({refresh: true});
      })
    }else{
    this._apiManager.postRequest("experience", this.experienceForm.value).subscribe(res=>{
      console.log(res);
      this.closeModal.emit({refresh: true});
    })
  }
  }

  update(e:any){
    const end_date = this.experienceForm.get("end_date");
    if(e.checked){
      end_date?.setValue(null);
      end_date?.disable();
    }else{
      end_date?.enable();
    }
  }

}
