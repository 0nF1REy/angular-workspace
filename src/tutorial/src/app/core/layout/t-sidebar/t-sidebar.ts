import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 't-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './t-sidebar.html',
  styleUrl: './t-sidebar.css',
})
export class TSidebar {}
