import { Component,Injectable, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MatButton } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout'
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'movie-control',
  standalone: true,
  imports: [MatToolbarModule, MatButton, FlexLayoutModule],
  templateUrl: './movie-control.component.html',
})
export class MovieControlComponent {
  constructor(
    private http: HttpClient
  ){
  }

  @Output() fetchSuccess: EventEmitter<any> = new EventEmitter()
  @Output() calcDetail: EventEmitter<any> = new EventEmitter()

  showAll(){
    this.http.get("./api//movie_project_refactoring/src/api/show_all_movie.php").subscribe((data) => {
      this.fetchSuccess.emit(data)
    });

  }

  totalCalc(){
    this.http.post("./api/movie_project_refactoring/src/api/calc_total.php", {kind: "LastData"}).subscribe((data: any) => {
      this.calcDetail.emit(data)
    })
  }

  recentlyMovieCheck(){
    this.http.get("./api/movie_project_refactoring/src/api/recently_movie_list.php").subscribe((data) => {
      this.fetchSuccess.emit(data)
    });
  }

  lastData(){
    this.http.post("./api/movie_project_refactoring/src/api/show_detail.php", {kind: "LastData"}).subscribe((data) => {
      this.fetchSuccess.emit(data)
    })
  }

}
