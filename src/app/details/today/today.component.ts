import { Component, OnInit, Input } from '@angular/core';
import { WeatherDay } from '../weatherDay';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor() { }

  @Input() day : WeatherDay;

  ngOnInit() {
  }

}
