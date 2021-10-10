export interface WeatherDTO {
  cityId: number;
  cityName: string;
  group: string;
  groupDescription?: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  tempUnity: string;
  feelsLike: number;
  humidity: number;
  clouds: number;
}
