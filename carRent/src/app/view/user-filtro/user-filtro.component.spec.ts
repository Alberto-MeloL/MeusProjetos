import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFiltroComponent } from './user-filtro.component';

describe('UserFiltroComponent', () => {
  let component: UserFiltroComponent;
  let fixture: ComponentFixture<UserFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFiltroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
