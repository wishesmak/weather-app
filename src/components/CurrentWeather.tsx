import React, { useEffect, useState } from 'react';
import { IData } from '../types/types';
import { motion } from 'framer-motion';

const CurrentWeather = ({ data, isNight }: { data: IData; isNight: boolean }) => {
  let conditionText = data.current.condition.text;
  let date = new Date();

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
        src={`images/3d-icons/${
          isNight
            ? conditionText.toLowerCase().replace(/\s+/g, '-') + '-night'
            : conditionText.toLowerCase().replace(/\s+/g, '-')
        }.png`}
        alt=""
      />
      <p className="current-desc">{conditionText}</p>
      <h3 className="current-temp" title="28">
        {data.current.temp_c}&deg;
      </h3>
      <div className="current__block">
        <div className="current__block-item">
          <img src="images/wind.svg" alt="" />
          <p>{data.current.wind_kph} km/h</p>
        </div>
        <div className="current__block-item">
          <img src="images/water-drop.svg" alt="" />
          <p>{data.current.precip_in} %</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
