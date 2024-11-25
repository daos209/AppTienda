import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: 'src/app/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: 'src/app/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: 'src/app/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: 'src/app/folder/archived', icon: 'archive' },
    { title: 'Trash', url: 'src/app/folder/trash', icon: 'trash' },
    { title: 'Spam', url: 'src/app/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
