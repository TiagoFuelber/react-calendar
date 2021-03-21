const API_KEY = 'c28bad91b0aacb7cf108b4151fe8f8b7';
const BASE_URL_API = 'https://api.openweathermap.org/data/2.5/forecast/daily';

const WeatherRepository = {
    getForecast: async (city: string, count: number): Promise<any> => {
        const response = await fetch(`${BASE_URL_API}?q=${encodeURIComponent(city)}&cnt=${count}&appid=${API_KEY}`);
        return response.json();
    }
}

export default WeatherRepository;