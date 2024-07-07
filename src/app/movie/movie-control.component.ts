import { Component,Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'movie-control',
  standalone: true,
  templateUrl: './movie-control.component.html',
})
export class MovieControlComponent {
  constructor(
    private http: HttpClient
  ){
  }

  @Output() fetchSuccess: EventEmitter<any> = new EventEmitter()

  showAll(){
    this.http.get("./api//movie_project_refactoring/src/api/show_all_movie.php").subscribe((data) => {
      this.fetchSuccess.emit(data)
    });

  }

  totalCalc(){
    this.http.post("./api/movie_project_refactoring/src/api/calc_total.php", {kind: "LastData"}).subscribe((data) => {
      console.log(data)
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
