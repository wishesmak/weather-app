import { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import FutureWeather from './components/FutureWeather';
import Search from './components/Search';
import axios from 'axios';
import { IData } from './types/types';
import { useDebounce } from './hooks/debounce';
import { motion } from 'framer-motion';

function App() {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState('London');

  const date = new Date();
  const [isNight, setIsNight] = useState<boolean>(date.getHours() >= 21 || date.getHours() <= 3);

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
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        console.log('Ничего не найдено');
      });
  };

  useEffect(() => {
    fetchWeather(debounce);
  }, [debounce]);

  useEffect(() => {
    const root = document.documentElement;

    root?.style.setProperty('--bg', isNight ? '#1e2935' : '#4be2e3');
    root?.style.setProperty('--text-color', isNight ? '#ffdb64' : '#203752');
    root?.style.setProperty('--light-bg', isNight ? '#26384b' : '#75f7f7');
  }, [isNight]);

  return (
    <div className="app">
      <Search setIsNight={setIsNight} isNight={isNight} setSearchValue={setSearchValue} />
      {!isLoading && data && (
        <>
          <CurrentWeather data={data} isNight={isNight} />
          <FutureWeather data={data} />
        </>
      )}
      {isError && (
        <div className="error">
          <div className="error__inner">
            <motion.span
              animate={{ scale: [1, 1.05, 1], rotate: [-30, 0, 30, 0, -30, -30, 0, 30, 0, -30] }}
              transition={{ repeat: Infinity, duration: 2 }}>
              😣
            </motion.span>
            <h1>oops...</h1>
            <p>nothing find</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
