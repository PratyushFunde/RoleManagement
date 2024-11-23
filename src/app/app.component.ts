import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManageService } from './services/user-manage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[UserManageService]
})
export class AppComponent {
  title = 'RoleManagement';
}
