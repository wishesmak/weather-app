import React from 'react';
import { IData } from '../types/types';
import { motion } from 'framer-motion';
import WindSvg from '../ui/WindSvg';
import WaterDropSvg from '../ui/WaterDropSvg';

interface Props {
  data: IData;
  isNight: boolean;
}

const CurrentWeather: React.FC<Props> = ({ data, isNight }) => {
  const conditionText = data.current.condition.text;
  const imageName = conditionText.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      className="current"
      transition={{ duration: 0.4 }}
      initial={{ opacity: 0, x: '-50px' }}
      animate={{ opacity: 1, x: 0 }}>
      <h1>{data.location.name}</h1>
      <motion.img
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        src={`images/3d-icons/${isNight ? imageName + '-night' : imageName}.png`}
        alt="weather-img"
      />
      <p className="current-desc">{conditionText}</p>
      <h3 className="current-temp" title="28">
        {data.current.temp_c}&deg;
      </h3>
      <div className="current__block">
        <div className="current__block-item">
          <WindSvg isNight={isNight} />
          <p>{data.current.wind_kph} km/h</p>
        </div>
        <div className="current__block-item">
          <WaterDropSvg isNight={isNight} />
          <p>{data.current.humidity} %</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
