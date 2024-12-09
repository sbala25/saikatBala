import { Component, OnInit, signal } from '@angular/core';
import { UtilsService } from '../../../service/utils.service';
import { SignOperationComponent } from '../../modal/sign-operation/sign-operation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  isAdmin = signal<boolean>(false);

  constructor(
    protected _utils: UtilsService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._utils.isAdmin.subscribe(res => this.isAdmin.update(() => res))
  }

  signOperation() {
    if (this.isAdmin()) {
      this._utils.isAdmin.next(false);
      return;
    }
    const dialogRef = this._dialog.open(SignOperationComponent);
  }

}
