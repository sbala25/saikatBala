import { Component, inject, model, OnDestroy, OnInit, signal } from '@angular/core';
import { ApiManagerService } from '../../service/apiManager/api-manager.service';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from '../modal/confirm-modal/confirm-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpParams } from '@angular/common/http';
import { AddEditExperienceComponent } from '../modal/add-edit-experience/add-edit-experience.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';
import { AppDataService } from '../../service/appData/app-data.service';
import { UtilsService } from '../../service/utils/utils.service';


@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatIconModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit, OnDestroy {

  fortawesome_solid = fortawesome_solid;
  experienceList = signal<any>([]);
  isExperienceModal: boolean = false;
  currentItem = null;
  isAdminSub: any;
  isAdmin: boolean = false;

  readonly dialog = inject(MatDialog);

  constructor(
    private _apiManager: ApiManagerService,
    private _appData: AppDataService,
    protected _utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.loadExperience();
    this.isAdminSub = this._appData.isAdmin.subscribe(res => {
      this.isAdmin = res;
    })
  }

  ngOnDestroy(): void {
    this.isAdminSub.unsubscribe();
  }

  loadExperience() {
    this._apiManager.getRequest("experience").subscribe(res => {
      let sortedData: any = res;
      sortedData.sort(function (a: any, b: any) {
        return new Date(b.start_date).valueOf() - new Date(a.start_date).valueOf();
      });
      sortedData.map((el: any) => {
        el.startDate = new Date(el.start_date);
      })
      this.experienceList.update(() => sortedData);
    }, err => {
      console.log(err);
    })
  }

  deleteExperience(experience_id: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result !== undefined) {
        let params = new HttpParams().set('experience_id', experience_id);
        this._apiManager.deleteRequest("experience", params).subscribe(res => {
          console.log(res);
          this.loadExperience();
        }, error => {
          console.log(error);
        })
      }
    });
  }

  addEditExperience(experience?: any) {
    const dialogRef1: any = this.dialog.open(AddEditExperienceComponent, {
      data: experience,
      disableClose: true,
      width: "600px",
      maxWidth: "100%"
    });
    dialogRef1.afterClosed().subscribe((result: any) => {
      if (result)
        this.loadExperience();
    });
  }

}
