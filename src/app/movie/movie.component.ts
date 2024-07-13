import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MovieControlComponent } from './movie-control.component'
import { HttpClient } from '@angular/common/http'
import { MatButton } from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MovieControlComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButton
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  constructor(
    private http: HttpClient
  ){
  }

  result: any[] = []
  categoryList: any[] = []
  selectedCategory: Number = 1
  selectedPoint: Number = 1

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
    }else{
      this.result = []
    }
  }
}
