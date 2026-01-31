import { Component, inject } from '@angular/core';
import { DataAccessService } from '@nestfullstack/data-access';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ngapp';
  protected dataAccessService = inject(DataAccessService);
  protected userResource = this.dataAccessService.userResource;
}
