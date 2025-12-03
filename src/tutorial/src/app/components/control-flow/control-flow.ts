import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvl: boolean = false;
}
