import { Component, OnInit, Input } from '@angular/core';
import { WeatherDay } from '../weatherDay';

@Component({
  selector: 'forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit {

  @Input() day:WeatherDay;

  constructor() { }

  ngOnInit() {
  }

}
