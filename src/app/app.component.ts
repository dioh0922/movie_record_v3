import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FlexLayoutModule],
  templateUrl: './main.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie_record_v3';
}
