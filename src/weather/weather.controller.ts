import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { AppError } from 'src/shared/AppError';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  async findOne(@Param('city') city: string) {
    try {
      return await this.weatherService.findOne(city);
    } catch (error) {
      if (error instanceof AppError)
        throw new HttpException(error.message, error.statusCode);
    }
  }
}
