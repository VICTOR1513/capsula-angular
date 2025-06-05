import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreadcrumbsService } from '../../../services/breadcrumbs.service';

export interface Breadcrumb {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})

export class BreadcrumbsComponent implements OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private readonly subscription: Subscription;

  constructor(private readonly breadcrumbsService: BreadcrumbsService) {
    this.subscription = this.breadcrumbsService.getBreadcrumbs()
      .subscribe(breadcrumbs => {
        debugger
        this.breadcrumbs = [
          ...breadcrumbs.filter(bc => bc.label && bc.url)
        ];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
