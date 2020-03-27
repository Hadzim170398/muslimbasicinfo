import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BulanislamPage } from './bulanislam.page';

describe('BulanislamPage', () => {
  let component: BulanislamPage;
  let fixture: ComponentFixture<BulanislamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulanislamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BulanislamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
