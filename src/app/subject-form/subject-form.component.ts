import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  @Input()
  public index: number;

  @Input()
  public item: FormGroup;

  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();
  
//  subjectName
//  maxMarks
//  obtainedMarks
  static addDisplaySubjects(subject: any) {
    return new FormGroup({
      subjectName: new FormControl({value:(subject.subjectName)?subject.subjectName:'',disabled:subject.disabled}, Validators.required),
      maxMarks: new FormControl({value:(subject.maxMarks)?subject.maxMarks:'',disabled:subject.disabled},Validators.required),
      // obtainedMarks: new FormControl({value:(subject.obtainedMarks)?subject.obtainedMarks:'',disabled:subject.disabled},Validators.required)
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
