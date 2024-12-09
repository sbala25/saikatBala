import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOperationComponent } from './sign-operation.component';

describe('SignOperationComponent', () => {
  let component: SignOperationComponent;
  let fixture: ComponentFixture<SignOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
