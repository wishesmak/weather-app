import React, { useState } from 'react';
import { IData } from '../types/types';

const CurrentWeather = ({ data }: { data: IData }) => {
  let conditionText = data.current.condition.text;

  return (
    <div className="current">
      <h1>{data.location.name}</h1>
      <img src={`images/3d-icons/${conditionText.toLowerCase().replace(/\s+/g, '-')}.png`} alt="" />
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
    </div>
  );
};

export default CurrentWeather;
