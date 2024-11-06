import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  id: string;
  fullName: string;
  description: string;
  url: string;
  designation: string;
  images: CoordImage[];
}
// TODO: Define a class for the Weather object
class Weather {

}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;
  private apiKey?: string;
  private cityName?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';
    this.cityName = process.env.cityName || '';
  }
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {

  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {

  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

  }

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {

  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {

  }

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {

  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    
  }
}

export default new WeatherService();