import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdonFormComponent } from './perdon-form.component';

describe('PerdonFormComponent', () => {
  let component: PerdonFormComponent;
  let fixture: ComponentFixture<PerdonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerdonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerdonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
