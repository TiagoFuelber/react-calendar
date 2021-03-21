import WeatherRepository from '../infra/WeatherRepository';

const getForecast = async (city: string, days: number): Promise<number> => {
    const response = await WeatherRepository.getForecast(city, days);

    if (response.cod === '200') {
        return response.list[response.cnt - 1].weather[0].id;
    }

    return 0;
};

export default getForecast;