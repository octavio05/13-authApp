import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authServices = inject(AuthService);

  public user = computed(() => this.authServices.currentUser());

  onLogout() {
    this.authServices.logout();
  }

}
