import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhalifahPage } from './khalifah.page';

describe('KhalifahPage', () => {
  let component: KhalifahPage;
  let fixture: ComponentFixture<KhalifahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhalifahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhalifahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
