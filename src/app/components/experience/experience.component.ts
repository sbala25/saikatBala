import { Component, inject, model, OnDestroy, OnInit, signal } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";
import { ApiManagerService } from '../../service/api-manager.service';
import { ExperienceModalComponent } from "../modal/experience-modal/experience-modal.component";
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../service/utils.service';
import { ConfirmModalComponent } from '../modal/confirm-modal/confirm-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ExperienceModalComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit, OnDestroy {

  experienceList = signal<any>([]);
  isExperienceModal: boolean = false;
  currentItem = null;
  isAdminSub: any;
  isAdmin: boolean = false;

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  constructor(
    private _apiManager: ApiManagerService,
    protected _utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.loadExperience();
    this.isAdminSub = this._utils.isAdmin.subscribe(res => {
      this.isAdmin = res;
    })
  }

  ngOnDestroy(): void {
    this.isAdminSub.unsubscribe();
  }

  onCloseExperienceModal(e: any) {
    this.isExperienceModal = false;
    if (e?.refresh)
      this.loadExperience();
  }

  loadExperience() {
    this._apiManager.getRequest("experience").subscribe(res => {
      let sortedData: any = res;
      sortedData.sort(function (a: any, b: any) {
        return new Date(b.start_date).valueOf() - new Date(a.start_date).valueOf();
      });
      this.experienceList.update(() => sortedData);
    }, err => {
      console.log(err);
    })
  }

  deleteExperience(experience_id: string) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      // data: {name: this.name(), animal: this.animal()},
    });

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

}
