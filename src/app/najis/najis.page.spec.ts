import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NajisPage } from './najis.page';

describe('NajisPage', () => {
  let component: NajisPage;
  let fixture: ComponentFixture<NajisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NajisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NajisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
