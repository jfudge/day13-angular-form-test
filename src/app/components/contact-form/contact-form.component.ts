import { Component, OnInit } from '@angular/core';

// Start building our reactive forms
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  // Create our Reactive Form
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    message: new FormControl('', [
      Validators.required,
    ]),
  });

  // Global form state
  hasError: boolean = false;
  isSubmitted: boolean = false;

  // Field data from our contactForm FormGroup using .get()
  // These will be bound to our template
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Class generation method that will evaluate form controls
  generateClasses(formControl: any) {
    // Craft the classes based off of the statuses of the form control
    const valid = formControl.valid && formControl.touched ? 'is-valid' : '';
    const invalid = formControl.invalid && (formControl.dirty || formControl.touched) ? 'is-invalid' : '';
    return `form-control ${valid} ${invalid}`;
  }

  onSubmit() {
    // Submit the form
    // console.log(this.contactForm);
    // console.log(this.email);

    // Clear all existing form errors before the next validation check
    this.hasError = false;

    if (this.contactForm.status === 'INVALID') {
      this.hasError = true;
    } else {
      this.isSubmitted = true;
    }


  }

  ngOnInit(): void {
  }

}
