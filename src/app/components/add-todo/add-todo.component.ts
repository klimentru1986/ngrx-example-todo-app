import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public addControl: FormControl;

  constructor() {}

  ngOnInit() {
    this.addControl = new FormControl(null, Validators.required);
  }

  onSubmit(): void {
    if (this.addControl.invalid) {
      this.addControl.markAsTouched();
      return;
    }

    console.log('submit');
  }
}
