import {Component, Input, OnInit, Output} from '@angular/core';
import {CardType} from "./card-type.enum";

@Component({
  selector: 'foo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   @Input() public type: CardType;
   @Output() public types! : CardType;

  constructor() {
    this.type = CardType.BLANK;
  }

  ngOnInit(): void {
  }

}
