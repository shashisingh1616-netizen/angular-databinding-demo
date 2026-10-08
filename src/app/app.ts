import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component'; // इम्पोर्ट करें

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'class';
}