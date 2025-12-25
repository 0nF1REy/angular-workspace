import { Injectable, signal } from '@angular/core';

export type SnowTheme = {
  name: string;
  background: string;
  snowColor: string;
  snowSpeed: number;
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public readonly STANDARD_SNOW_AMOUNT = 200;

  private readonly themes: Record<string, SnowTheme> = {
    snowNight: {
      name: 'Snow Night',
      background: '#1b2735',
      snowColor: '#ffffff',
      snowSpeed: 1.7,
    },
    christmasLights: {
      name: 'Christmas Lights',
      background: 'url("/christmas-lights.jpg")',
      snowColor: '#ffffff',
      snowSpeed: 1.9,
    },
    warmFireplace: {
      name: 'Warm Fireplace',
      background: '#8a3d12',
      snowColor: '#ffe9c4',
      snowSpeed: 1.4,
    },
  };

  constructor() {
    this.preloadImages();
  }

  private preloadImages() {
    Object.values(this.themes).forEach((theme) => {
      const match = theme.background.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (match && match[1]) {
        const img = new Image();
        img.src = match[1];
      }
    });
  }

  currentTheme = signal<SnowTheme>(this.themes['snowNight']);

  setTheme(key: keyof typeof this.themes) {
    const selectedTheme = this.themes[key];
    if (selectedTheme) {
      this.currentTheme.set(selectedTheme);
    }
  }

  getThemeKeys() {
    return Object.keys(this.themes) as (keyof typeof this.themes)[];
  }
}
