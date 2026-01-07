import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMensagemComponent } from './tela-mensagem.component';

describe('TelaMensagemComponent', () => {
  let component: TelaMensagemComponent;
  let fixture: ComponentFixture<TelaMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMensagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
