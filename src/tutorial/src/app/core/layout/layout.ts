import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TSidebar } from './components/t-sidebar/t-sidebar';
import { THeader } from './components/t-header/t-header';

@Component({
  selector: 't-layout',
  imports: [RouterOutlet, TSidebar, THeader],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
