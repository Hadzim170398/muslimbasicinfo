import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RukunislamPage } from './rukunislam.page';

describe('RukunislamPage', () => {
  let component: RukunislamPage;
  let fixture: ComponentFixture<RukunislamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RukunislamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RukunislamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
