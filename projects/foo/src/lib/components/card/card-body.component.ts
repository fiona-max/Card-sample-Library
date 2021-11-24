import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-card-body',
  template: `<ng-content></ng-content>`
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
