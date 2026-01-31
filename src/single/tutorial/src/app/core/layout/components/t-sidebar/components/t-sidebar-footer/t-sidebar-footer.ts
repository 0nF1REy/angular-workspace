import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';

@Component({
  selector: 't-sidebar-footer',
  standalone: true,
  templateUrl: './t-sidebar-footer.html',
  styleUrl: './t-sidebar-footer.css',
})
export class TSidebarFooter {
  private authService = inject(AuthService);

  onLogout() {
    this.authService.logout();
  }
}
