import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import FutureWeather from './components/FutureWeather';
import Search from './components/Search';
import axios from 'axios';
import { IData } from './types/types';
import { useDebounce } from './hooks/debounce';

function App() {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('London');

  const debounce = useDebounce(searchValue, 1000);

  const fetchWeather = async (city: string) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: { q: city ? city : 'London', days: '3' },
      headers: {
        'X-RapidAPI-Key': '3d42b50b7amshec8c201ac9070c4p11135ajsn809edcc7b578',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    setIsLoading(true);

    await axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log('Ничего не найдено');
      });
  };

  useEffect(() => {
    fetchWeather(debounce);
  }, [debounce]);

  return (
    <div className="app">
      <Search setSearchValue={setSearchValue} />
      {isLoading ? 'Loading' : data && <CurrentWeather data={data} />}
      {/* <FutureWeather /> */}
    </div>
  );
}

export default App;
