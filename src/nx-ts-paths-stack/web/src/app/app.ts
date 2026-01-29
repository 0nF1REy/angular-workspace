import { DataAccessService } from '@nx-ts-paths-stack/data-access';
import { Component, inject, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
  protected dataAccessService = inject(DataAccessService);
  protected userStatus = computed(() =>
    String(this.dataAccessService.user.status()),
  );
  protected userData = computed(() => this.dataAccessService.user.value());
}
