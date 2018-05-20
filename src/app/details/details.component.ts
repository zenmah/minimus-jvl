import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather.service';
import { WeatherDay } from './weatherDay';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  currentDayOfWeekName: string;
  today: WeatherDay;

  days: WeatherDay[] = []// [{dayNo:1}, {dayNo:2}, {dayNo:3}, {dayNo:4}, {dayNo:5}];

  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) {
  }

  ngOnInit() {
    //todo move logic over into service
    const todayNumberInWeek = new Date().getDay();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    this.activeRouter.paramMap.subscribe((route: any) => {

      this.city = route.params.city;

      //get WeatherDay of Today
      this.today = {dayNo : 0, name : dayNames[todayNumberInWeek]}
      this.weather.getWeatherState(this.city).subscribe((state) => this.today.state = state);
      this.weather.getCurrentTemp(this.city).subscribe((temperature) => this.today.temp = temperature);
      this.weather.getCurrentHum(this.city).subscribe((humidity) => this.today.hum = humidity);
      this.weather.getCurrentWind(this.city).subscribe((windspeed) => this.today.wind = windspeed);
      this.weather.getForecast(this.city).subscribe((data: any) => {
        console.log(data);
        var daysProcessed:number[] = [];
        var dayNo = 1;
        for (let i = 0; i < data.length && daysProcessed.length < 6; i++) {
          const dayNoToProcess = new Date(data[i].dt_txt).getDay();
          if (!daysProcessed.some( x => x == dayNoToProcess))
          {
            daysProcessed.push(dayNoToProcess);
            var day = {dayNo: dayNo, name : dayNames[dayNoToProcess], state : data[i].weather[0].main, temp : Math.round(data[i].main.temp)};
            this.days[daysProcessed.length-1] = day;
            dayNo++;
          }
        }
      });

    });

  }

}