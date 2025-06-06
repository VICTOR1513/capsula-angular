import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BarraNavegacionalService } from '../../../services/barra-navegacional.service';
import { BarraNavegacional } from '../../../models/barra-navegacional';

@Component({
  selector: 'app-barra-navegacional',
  templateUrl: './barra-navegacional.component.html',
  styleUrl: './barra-navegacional.component.css',
})
export class BarraNavegacionalComponent implements OnDestroy {

  public barraNavegacionalList: BarraNavegacional[] = [];
  private readonly subscription: Subscription;

  constructor(private readonly barraNavegacionalService: BarraNavegacionalService) {
    this.subscription = this.barraNavegacionalService.getBreadcrumbs().subscribe(data => {
        this.barraNavegacionalList = [ ...data.filter(item => item.label && item.url)];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
