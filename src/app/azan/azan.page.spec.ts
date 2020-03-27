import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AzanPage } from './azan.page';

describe('AzanPage', () => {
  let component: AzanPage;
  let fixture: ComponentFixture<AzanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AzanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
