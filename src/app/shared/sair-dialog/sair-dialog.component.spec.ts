import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairDialogComponent } from './sair-dialog.component';

describe('SairDialogComponent', () => {
  let component: SairDialogComponent;
  let fixture: ComponentFixture<SairDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SairDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
