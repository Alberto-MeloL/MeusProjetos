import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPodcastsComponent } from './meus-podcasts.component';

describe('MeusPodcastsComponent', () => {
  let component: MeusPodcastsComponent;
  let fixture: ComponentFixture<MeusPodcastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusPodcastsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeusPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
