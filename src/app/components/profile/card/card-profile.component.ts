import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { User } from '../../../model/User';


@Component({
  selector: 'app-card-profile',
  template: `
  <div class="media">
    <div class="media-left">
  <figure class="image is-128x128">
    <img  class="is-rounded"  [src]="user.avatar_url" width="50" height="50" />
  </figure>
  </div>
  <div class="media-content">
    <div class="content">
    <a href="{{user.login | makeUrl}}" target="_blank">{{user.login}}</a>
    </div>
  </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProfileComponent {
  @Input() user!: User;
}
