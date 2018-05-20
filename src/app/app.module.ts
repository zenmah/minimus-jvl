import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { UiService } from './services/ui.service';
import { WeatherService } from './services/weather.service';
import { DetailsComponent } from './details/details.component';
import { StormComponent } from './weather-conditions/storm/storm.component';
import { DrizzleComponent } from './weather-conditions/drizzle/drizzle.component';
import { CloudsComponent } from './weather-conditions/clouds/clouds.component';
import { ForecastDayComponent } from './details/forecast-day/forecast-day.component';
import { ClearComponent } from './weather-conditions/clear/clear.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent,
    StormComponent,
    DrizzleComponent,
    CloudsComponent,
    ForecastDayComponent,
    ClearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UiService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
