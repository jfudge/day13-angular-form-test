import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add our own custom tests
  it('should set hasError to true when invalid data is submitted', async () => {
    component.onSubmit();
    expect(component.hasError).toBeTruthy();
  });

  it('should set isSubmitted to true when valid data is submitted', async () => {
    component.contactForm.controls.name.setValue('Rick Sanchez');
    component.contactForm.controls.email.setValue('test@test.net');
    component.contactForm.controls.message.setValue('Hello World!');
    component.onSubmit();
    expect(component.isSubmitted).toBeTruthy();
  });



});
