import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  secondStandardData: any[] = [];
  firstStandardData: any[] = [];
  selectedStandard!: string;
  students: any;

  constructor(private studentService: StudentService) { }
  ngOnInit(): void { }

  onStandardChange() {
    if (this.selectedStandard !== null) {
      this.getSecondStandardData(this.selectedStandard); // Pass selectedStandard here
    }
  }

  getSecondStandardData(_standard: string): void {
    this.studentService.getFirstStandardData(_standard)
      .subscribe(data => {
        console.log(data, "students");
        this.students = data;
      }, error => {
        // Handle error
      });
  }

  // getFirstStandardData(): void {
  //   this.studentService.getFirstStandardData()
  //     .subscribe(data => {
  //       console.log(data, "First");
  //       this.firstStandardData = data;
  //     }, error => {
  //       // Handle error
  //     });
  // }
}
