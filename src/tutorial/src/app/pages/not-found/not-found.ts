import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 't-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {}
