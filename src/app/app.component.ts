import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatButton } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatToolbarModule,FlexLayoutModule, RouterLink,MatMenuModule,MatButton,MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie_record_v3';
}
