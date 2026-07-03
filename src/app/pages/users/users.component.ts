import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastLogin: '2026-07-03 10:15 AM'},
  {id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-07-02 04:30 PM'},
  {id: 3, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2026-06-25 09:00 AM'},
  {id: 4, name: 'Diana Evans', email: 'diana.e@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-07-03 11:45 AM'},
  {id: 5, name: 'Eve Foster', email: 'eve.f@example.com', role: 'Viewer', status: 'Active', lastLogin: '2026-07-01 02:20 PM'},
  {id: 6, name: 'Frank Green', email: 'frank.g@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2026-05-15 08:30 AM'},
  {id: 7, name: 'Grace Hill', email: 'grace.hill@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-07-03 09:10 AM'},
  {id: 8, name: 'Henry Adams', email: 'henry.a@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2026-06-10 11:00 AM'},
  {id: 9, name: 'Isabella Taylor', email: 'isabella.t@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-07-03 08:45 AM'},
  {id: 10, name: 'Jack White', email: 'jack.w@example.com', role: 'Viewer', status: 'Active', lastLogin: '2026-07-02 01:15 PM'},
  {id: 11, name: 'Karen Clark', email: 'karen.c@example.com', role: 'Admin', status: 'Active', lastLogin: '2026-07-03 03:30 PM'},
  {id: 12, name: 'Liam Wright', email: 'liam.w@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2026-05-20 10:00 AM'},
  {id: 13, name: 'Mia Scott', email: 'mia.s@example.com', role: 'Editor', status: 'Active', lastLogin: '2026-07-01 04:20 PM'},
  {id: 14, name: 'Noah King', email: 'noah.k@example.com', role: 'Viewer', status: 'Active', lastLogin: '2026-06-28 11:10 AM'},
  {id: 15, name: 'Olivia Lee', email: 'olivia.l@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2026-04-12 09:30 AM'}
];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'lastLogin', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
}
