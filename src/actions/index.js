import axios from 'axios';

const API_KEY = '886705b4c1182eb1c69f28eb8c520e20';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // make call to weather api endpoint
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}