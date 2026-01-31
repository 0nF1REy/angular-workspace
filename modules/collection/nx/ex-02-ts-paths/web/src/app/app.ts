import { DataAccessService } from '@nx-ts-paths-stack/data-access';
import { Component, inject, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { User } from '@nx-ts-paths-stack/shared';

@Component({
  imports: [JsonPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected dataAccessService = inject(DataAccessService);

  protected userStatus = computed(() =>
    String(this.dataAccessService.user.status()),
  );

  protected apiResponse = computed(() => this.dataAccessService.user.value());

  protected userData = computed<User | undefined>(() => {
    return this.dataAccessService.user.value()?.user;
  });
}
