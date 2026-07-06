import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

export interface UserElement {
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-recent-users-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatChipsModule],
  templateUrl: './recent-users-table.component.html',
  styleUrl: './recent-users-table.component.css'
})
export class RecentUsersTableComponent {
  @Input() title: string = 'Recent Users';
  @Input() data: UserElement[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'status'];
}
