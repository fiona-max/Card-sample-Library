import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-card-header',
  template: `<ng-content></ng-content>`
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
