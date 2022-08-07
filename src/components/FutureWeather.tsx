import React from 'react';
import { IData } from '../types/types';
import { motion } from 'framer-motion';

interface Props {
  data: IData;
}

const FutureWeather: React.FC<Props> = ({ data }) => {
  return (
    <div className="future">
      {data.forecast.forecastday.map((day, i) => (
        <motion.div
          transition={{ duration: 0.4, delay: 0.3 * i }}
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: 0 }}
          key={day.date}
          className="future-item">
          <h5>{day.date.replaceAll('-', '.')}</h5>
          <img
            src={`images/2d-icons/wi-day-${day.day.condition.text
              .toLowerCase()
              .replace(/\s+/g, '-')}.svg`}
            alt={day.day.condition.text.toLowerCase().replace(/\s+/g, '-')}
          />
          <span>{Math.round((day.day.maxtemp_c + day.day.mintemp_c) / 2)}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FutureWeather;
