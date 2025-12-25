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
  private readonly themes: Record<string, SnowTheme> = {
    snowNight: {
      name: 'Snow Night',
      background: '#1b2735',
      snowColor: '#ffffff',
      snowSpeed: 0.7,
    },
    christmasLights: {
      name: 'Christmas Lights',
      background: 'https://loremflickr.com/1980/1080/christmas',
      snowColor: '#ffffff',
      snowSpeed: 0.9,
    },
    warmFireplace: {
      name: 'Warm Fireplace',
      background: '#8a3d12',
      snowColor: '#ffe9c4',
      snowSpeed: 0.4,
    },
  };

  currentTheme = signal<SnowTheme>(this.themes['snowNight']);
  private readonly FALLBACK_IMAGE = 'url("/christmas-lights.jpg")';

  async setTheme(key: string) {
    const baseTheme = this.themes[key];
    if (!baseTheme) return;

    if (baseTheme.background.startsWith('http')) {
      const urlWithCacheBust = `${baseTheme.background}?random=${Date.now()}`;

      try {
        await this.validateImage(urlWithCacheBust);
        this.currentTheme.set({
          ...baseTheme,
          background: `url("${urlWithCacheBust}")`,
        });
      } catch (error) {
        this.currentTheme.set({
          ...baseTheme,
          background: this.FALLBACK_IMAGE,
        });
      }
    } else {
      this.currentTheme.set({ ...baseTheme });
    }
  }

  private validateImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject();
      setTimeout(() => reject(), 7000);
    });
  }

  getThemeKeys() {
    return Object.keys(this.themes);
  }
}
