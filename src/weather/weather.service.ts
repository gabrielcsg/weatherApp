import { Injectable } from '@nestjs/common';

import { api } from 'src/config/api';
import { AppError } from 'src/shared/AppError';

import { ResponseWeatherDTO } from './dto/ResponseWeatherDTO';
import { Weather } from './entities/weather.entity';
import { WeatherDTO } from './dto/WeatherDTO';

@Injectable()
export class WeatherService {
  async findOne(city: string): Promise<Weather> {
    const weather = new Weather();

    try {
      // faz requisição para api do OpenWeather
      const response = await api.get('/weather', {
        params: {
          q: city,
          appid: '4db3ddb3d05b0cbbc0ad39447a8d17a5',
          units: 'metric',
        },
      });

      // Tratamento dos dados da resposta
      const data: ResponseWeatherDTO = response.data;

      const weatherResult: WeatherDTO = {
        cityId: data.id,
        cityName: data.name,
        condition: data.weather[0].main,
        conditionDescription: data.weather[0].description,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        tempUnity: 'Celsius',
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
        windSpeed: data.wind.speed,
      };

      Object.assign(weather, weatherResult);
    } catch (error) {
      if (error.response?.data?.cod === '404')
        throw new AppError('Cidade não encontrada', 404);
      throw new AppError('Erro no consumo da api do OpenWeather');
    }

    return weather;
  }
}
