import { Component, OnInit, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { SubjectFormComponent } from '../subject-form/subject-form.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  @Input()
  public subjectFormAry: FormArray;

  addItem() {
    this.subjectFormAry.push(SubjectFormComponent.addDisplaySubjects({
      subjectName : '',
      maxMarks : '',
    }))
  }

  static displaySubjects(subjectAry) {
    let formAry=[];
    for (const i of subjectAry) {
      formAry.push(SubjectFormComponent.addDisplaySubjects(i));
    }
    return new FormArray(formAry)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
