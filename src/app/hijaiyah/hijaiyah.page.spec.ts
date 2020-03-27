import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HijaiyahPage } from './hijaiyah.page';

describe('HijaiyahPage', () => {
  let component: HijaiyahPage;
  let fixture: ComponentFixture<HijaiyahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijaiyahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HijaiyahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
