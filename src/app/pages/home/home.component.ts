import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../shared/components/widgets/stat-card/stat-card.component';
import { ChartCardComponent } from '../../shared/components/widgets/chart-card/chart-card.component';
import { RecentUsersTableComponent, UserElement } from '../../shared/components/widgets/recent-users-table/recent-users-table.component';
import { RecentActivityComponent, ActivityElement } from '../../shared/components/widgets/recent-activity/recent-activity.component';
import { QuickActionsComponent, ActionElement } from '../../shared/components/widgets/quick-actions/quick-actions.component';
import { NotificationPanelComponent, NotificationElement } from '../../shared/components/widgets/notification-panel/notification-panel.component';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StatCardComponent,
    ChartCardComponent,
    RecentUsersTableComponent,
    RecentActivityComponent,
    QuickActionsComponent,
    NotificationPanelComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Stat Cards Data
  stats = [
    { title: 'Total Users', value: '12,450', icon: 'people', color: '#1976d2', trend: '+5.2%', trendUp: true },
    { title: 'Active Users', value: '8,230', icon: 'how_to_reg', color: '#388e3c', trend: '+1.4%', trendUp: true },
    { title: 'Revenue', value: '$45,200', icon: 'attach_money', color: '#fbc02d', trend: '-2.1%', trendUp: false },
    { title: 'Orders', value: '1,245', icon: 'shopping_cart', color: '#d32f2f', trend: '+12.5%', trendUp: true }
  ];

  // Charts Data
  lineChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Revenue', borderColor: '#1976d2', tension: 0.4, fill: false }
    ]
  };

  barChartData: ChartConfiguration['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [120, 150, 180, 90, 210, 250, 310], label: 'Orders', backgroundColor: '#388e3c' }
    ]
  };

  pieChartData: ChartConfiguration['data'] = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      { data: [300, 500, 100], backgroundColor: ['#1976d2', '#d32f2f', '#fbc02d'] }
    ]
  };

  // Other Widgets Data
  recentUsers: UserElement[] = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive' },
    { name: 'Diana Evans', email: 'diana@example.com', role: 'Editor', status: 'Active' },
  ];

  activities: ActivityElement[] = [
    { id: '1', message: 'Alice logged in', time: '5 mins ago', icon: 'login', color: '#4caf50' },
    { id: '2', message: 'New order #1024 placed', time: '12 mins ago', icon: 'shopping_cart', color: '#2196f3' },
    { id: '3', message: 'Server rebooted', time: '1 hour ago', icon: 'dns', color: '#f44336' },
  ];

  quickActions: ActionElement[] = [
    { label: 'Add User', icon: 'person_add', color: '#1976d2' },
    { label: 'Create Post', icon: 'post_add', color: '#388e3c' },
    { label: 'Settings', icon: 'settings', color: '#757575' },
    { label: 'Reports', icon: 'bar_chart', color: '#fbc02d' },
  ];

  notifications: NotificationElement[] = [
    { id: '1', title: 'System Update', description: 'Version 2.0 is available.', time: '2 hours ago', isRead: false, type: 'info' },
    { id: '2', title: 'High CPU Usage', description: 'Server CPU hit 95%.', time: '4 hours ago', isRead: false, type: 'warning' },
    { id: '3', title: 'Backup Complete', description: 'Daily backup finished.', time: '1 day ago', isRead: true, type: 'success' },
  ];
}
