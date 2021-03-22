const BASE_URL_API = 'https://api.openweathermap.org/data/2.5/forecast/daily';

const WeatherRepository = {
    getForecast: async (city: string, count: number): Promise<any> => {
        const response = await fetch(`${BASE_URL_API}?q=${encodeURIComponent(city)}&cnt=${count}&appid=${process.env.REACT_APP_AUTH_TOKEN}`);
        return response.json();
    }
}

export default WeatherRepository;