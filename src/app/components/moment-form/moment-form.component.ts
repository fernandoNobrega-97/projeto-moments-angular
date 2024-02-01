import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Momment } from 'src/app/Momment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Momment>
  @Input() btnText!: string;
  @Input() mommentData: Momment | null = null;

  momentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.mommentData ? this.mommentData.id : ''),
      title: new FormControl(this.mommentData ? this.mommentData.title : '', [Validators.required]),
      description: new FormControl(this.mommentData ? this.mommentData.description : '', [Validators.required]),
      image: new FormControl(this.mommentData ? this.mommentData.image : ''),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  selectTheFile(event: any) {
    const file: File = event.target.files[0];

    this.momentForm.patchValue({ image: file });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    this.onSubmit.emit(this.momentForm.value);
  }
}
