import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TSidebar } from './t-sidebar/t-sidebar';
import { THeader } from './t-header/t-header';

@Component({
  selector: 'layout',
  imports: [RouterOutlet, TSidebar, THeader],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
