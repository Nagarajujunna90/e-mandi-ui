import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeditorComponent } from './profileeditor.component';

describe('ProfileeditorComponent', () => {
  let component: ProfileeditorComponent;
  let fixture: ComponentFixture<ProfileeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
