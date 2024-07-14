import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { MatButton } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialog } from '@angular/material/dialog'
import { MovieControlComponent } from './movie-control.component'
import { DialogComponent, DIALOG_MODE, DialogModeType } from './dialog.component'

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MovieControlComponent,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatButton
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ){
  }
  result: any[] = []
  categoryList: any[] = []
  selectedCategory: Number = 1
  selectedPoint: string = "1"

  ngOnInit(){
    this.http.get("./api/movie_project_refactoring/src/api/get_category_table.php").subscribe((data: any) => {
      this.categoryList = data.category ?? data.category
    });
  }

  serchCategoryMovie(){
    this.searchDetail({kind: "Category", value:this.selectedCategory})
  }

  searchPoint(){
    this.searchDetail({kind: "Point", point:this.selectedPoint})
  }

  private searchDetail(param: any){
    this.http.post("./api//movie_project_refactoring/src/api/show_detail.php", param).subscribe((data: any) => {
      this.setResult(data)
    });
  }

  setResult(list: any[]){
    if(list.length > 0){
      this.result = list
      this.openDialogResultList()
    }else{
      this.result = []
    }
  }

  showDetail(e: any){
    this.openDialog({mode: DIALOG_MODE.DETAIL, detail: e})
  }

  openDialogResultList(){
    this.openDialog({mode: DIALOG_MODE.LIST, list: this.result})
  }

  openDialog(param: {mode: DialogModeType, list?: any[], detail?: string}): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: param,
    });

  }
}
