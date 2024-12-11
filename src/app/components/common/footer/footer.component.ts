import { Component, OnInit, signal } from '@angular/core';
import { SignOperationComponent } from '../../modal/sign-operation/sign-operation.component';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_brands from '@fortawesome/free-brands-svg-icons';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';
import { AppDataService } from '../../../service/appData/app-data.service';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  isAdmin = signal<boolean>(false);
  fortawesome_brands = fortawesome_brands;
  fortawesome_solid = fortawesome_solid;
  constructor(
    private _appData: AppDataService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._appData.isAdmin.subscribe(res => this.isAdmin.update(() => res))
  }

  signOperation() {
    if (this.isAdmin()) {
      this._appData.isAdmin.next(false);
      return;
    }
    const dialogRef = this._dialog.open(SignOperationComponent);
  }

}
