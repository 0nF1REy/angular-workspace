import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  Injectable,
} from '@angular/core';
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { Title } from '@angular/platform-browser';

import { routes } from './app.routes';
import { tReducers } from './core/store';

@Injectable({ providedIn: 'root' })
class CustomTitleStrategy extends TitleStrategy {
  private readonly titleService = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.titleService.setTitle(`Tutorial - ${title}`);
    } else {
      this.titleService.setTitle('Tutorial Lab');
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideStore(tReducers),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: true,
    }),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
};
