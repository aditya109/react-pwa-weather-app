import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1ad54b92b4e18bb27c50d13dba52b088';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID : API_KEY,
        }
    });
    return data;
}