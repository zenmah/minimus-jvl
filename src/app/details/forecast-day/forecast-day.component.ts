import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {

  @Input() name:string;
  @Input() temp:string;
  @Input() state:string;

  constructor() { }

  ngOnInit() {
  }

}
