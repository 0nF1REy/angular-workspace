import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCursosComponent } from './cad-cursos.component';

describe('CadCursosComponent', () => {
  let component: CadCursosComponent;
  let fixture: ComponentFixture<CadCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
