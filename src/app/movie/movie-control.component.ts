import { Component } from '@angular/core';

@Component({
  selector: 'movie-control',
  standalone: true,
  templateUrl: './movie-control.component.html',
})
export class MovieControlComponent {
  showAll(){
    alert("TODO: すべて表示")
  }

  totalCalc(){
    alert("TODO: 合計取得")
  }

  recentlyMovieCheck(){
    alert("TODO: 最新10件")
  }

  lastData(){
    alert("TODO: 最新取得")
  }


}
