export interface ResponseWeatherDTO {
  weather: [
    {
      main: string;
      description: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  id: number;
  name: string;
  wind: {
    speed: number;
  };
}
