import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TSidebar } from './t-sidebar/t-sidebar';

@Component({
  selector: 'layout',
  imports: [RouterOutlet, TSidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
