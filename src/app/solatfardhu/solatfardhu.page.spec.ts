import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolatfardhuPage } from './solatfardhu.page';

describe('SolatfardhuPage', () => {
  let component: SolatfardhuPage;
  let fixture: ComponentFixture<SolatfardhuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolatfardhuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolatfardhuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
