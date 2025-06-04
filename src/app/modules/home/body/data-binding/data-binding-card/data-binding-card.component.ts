import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-data-binding-card',
  templateUrl: './data-binding-card.component.html',
  styleUrl: './data-binding-card.component.css'
})

export class DataBindingCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() iconColor!: string;
  @Input() borderColor!: string;
  @Input() bgColor!: string;
  @Input() description!: string;
  @Input() note!: string;
  @Input() extraContent?: string;
  @Input() link?: string;
  @Input() linkText?: string;
}
