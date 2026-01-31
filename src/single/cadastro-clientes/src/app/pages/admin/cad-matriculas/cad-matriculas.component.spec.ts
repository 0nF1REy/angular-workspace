import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMatriculasComponent } from './cad-matriculas.component';

describe('CadMatriculasComponent', () => {
  let component: CadMatriculasComponent;
  let fixture: ComponentFixture<CadMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadMatriculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
