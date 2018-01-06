import { Component } from "@angular/core";
import {CourseService} from "./course/course.service";

@Component({
  selector: 'courses',
  template: `<h2>
    {{ titleCourse}}
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  </h2>  `
})
export class CoursesComponent {
  titleCourse = 'Authors:'
  courses;

  constructor(service: CourseService) {
    this.courses = service.getCourse();
  }
}
