import { Component,Injectable, model, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButton } from '@angular/material/button'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

export const DIALOG_MODE = {
  LIST: 'LIST' as 'LIST',
  DETAIL: 'DETAIL' as 'DETAIL'
} as const;
export type DialogModeType = typeof DIALOG_MODE[keyof typeof DIALOG_MODE];

export interface DialogData {
  mode: DialogModeType,
  list: any[],
  detail: {
    scrTime?: Number,
    value?: Number,
    count?: Number
  }
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly resultList = this.data.list
  readonly dispMode: DialogModeType = this.data.mode
  readonly detail = this.data.detail
  readonly DIALOG_MODE = DIALOG_MODE

  onNoClick(): void {
    this.dialogRef.close();
  }
}
