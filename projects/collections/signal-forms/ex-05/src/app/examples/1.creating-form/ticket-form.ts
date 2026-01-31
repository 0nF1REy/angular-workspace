import { Component, signal } from '@angular/core';
import { Control } from '@angular/forms/signals';
import { form } from '@angular/forms/signals';
import { Ticket } from './ticket.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [Control, JsonPipe],
  templateUrl: './ticket-form.component.html',
})
export class TicketFormComponent {
  // 1. Definição do estado inicial com um signal
  ticket = signal<Ticket>({
    attendeeName: 'João',
    ticketType: 'Standard',
    eventId: 'ng-conf 2025',
  });

  // 2. Criação do Signal Form a partir do estado
  ticketForm = form(this.ticket);

  save(): void {}
}
