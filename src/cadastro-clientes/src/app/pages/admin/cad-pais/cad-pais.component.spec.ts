import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPaisComponent } from './cad-pais.component';

describe('CadPaisComponent', () => {
  let component: CadPaisComponent;
  let fixture: ComponentFixture<CadPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadPaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
