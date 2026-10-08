import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = "shashi1616";
  firstName: string = "shashi";
  lastName: string = "singh";
  email: string = "shashisingh1616@gmail.com";

  flag: boolean = false;

  classStatus: string = "";
  updateCourse(coursename: string) {
    this.classStatus = coursename + " class is started";
  }

  guestName: string = "shyam";
}