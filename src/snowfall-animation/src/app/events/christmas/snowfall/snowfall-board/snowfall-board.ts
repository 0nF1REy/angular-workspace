import { ThemeService } from './../services/theme';
import { Component } from '@angular/core';
import { Snowfall } from '../snowfall/snowfall';

@Component({
  selector: 'snowfall-board',
  imports: [Snowfall],
  templateUrl: './snowfall-board.html',
  styleUrl: './snowfall-board.scss',
  providers: [ThemeService],
})
export class SnowfallBoard {
  constructor(private ThemeService: ThemeService) {
    this.setTheme('snowNight');
  }

  setTheme(key: any) {
    this.ThemeService.setTheme(key);
    document.body.style.background = this.ThemeService.currentTheme().background;
  }
}
