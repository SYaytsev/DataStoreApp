import {Component, OnInit} from '@angular/core';
import { LocalStoreService } from '../../services/local-store-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-navigation-menu',
  templateUrl: './left-navigation-menu.component.html',
  styleUrls: ['./left-navigation-menu.component.scss']
})
export class LeftNavigationMenuComponent implements OnInit {
  photosRoute = '/photos';
  isSizeBarShown: boolean;

  constructor(private router: Router,
              public localStoreService: LocalStoreService) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isSizeBarShown = (this.router.url === this.photosRoute);
    });
  }
}
