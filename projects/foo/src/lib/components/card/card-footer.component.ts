import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-card-footer',
  template: `<ng-content></ng-content>`
})
export class CardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
