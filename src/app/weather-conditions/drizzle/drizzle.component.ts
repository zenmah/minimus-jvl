import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'condi-drizzle',
  templateUrl: './drizzle.component.html',
  styles: [`  .forecast-condition__icon {
    height: 4rem;
  }`]
})
export class DrizzleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
