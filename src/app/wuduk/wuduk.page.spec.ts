import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WudukPage } from './wuduk.page';

describe('WudukPage', () => {
  let component: WudukPage;
  let fixture: ComponentFixture<WudukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WudukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WudukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
