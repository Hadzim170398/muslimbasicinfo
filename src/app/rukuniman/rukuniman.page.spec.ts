import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RukunimanPage } from './rukuniman.page';

describe('RukunimanPage', () => {
  let component: RukunimanPage;
  let fixture: ComponentFixture<RukunimanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RukunimanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RukunimanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
