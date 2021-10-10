export interface WeatherDTO {
  cityId: number;
  cityName: string;
  condition: string;
  conditionDescription: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  tempUnity: string;
  feelsLike: number;
  humidity: number;
  clouds: number;
  windSpeed: number;
}
