import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegistrationComponent} from "./registration.component";

describe('RegistrationComponent', () => {
  let fixture: ComponentFixture<RegistrationComponent>;
  let component: RegistrationComponent


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegistrationComponent
      ],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
  })

  it('should create the registration', () => {
    expect(component).toBeTruthy();
  });

  it(`component show email`, () => {
    component.registrationForm.value.password = 'Test@gmail.com'
    expect(component.registrationForm.value.password).toBe('Test@gmail.com');
  });

  it('should have input element with email', function () {
    const element = fixture.debugElement.nativeElement.querySelector('#email')
    expect(element).toBeTruthy();
  });

  it('should have input element with name', function () {
    const element = fixture.debugElement.nativeElement.querySelector('#name')
    expect(element).toBeTruthy();
  });

  it('should have input element with password', function () {
    const element = fixture.debugElement.nativeElement.querySelector('#password')
    expect(element).toBeTruthy();
  });

});
