import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherByCity } from '../model/weatherByCity';


@Injectable({
  providedIn: 'root'
})
export class WeatherByCityService {

  url: string =  environment.url;
  constructor(private http: HttpClient) { }

  getCityWeather(cityName : string) {

    return this.http.get<any>(this.url + "/weatherByCity/" + cityName);
  }


}
