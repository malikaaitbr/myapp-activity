import React from 'react';
import { getEmojiClassName } from './WeatherCard';
import Emoji from './WatherEmoji';
import { getEmoji } from '../Geoloc';

const City = (props) => {
  const { current, fix } = props;
  const emoji = getEmojiClassName(current.weather[0].main);
  if (fix) {
    return (
      <div className="today-sticky-container" >
        
        <h1  className="text-center" >
          <Emoji name={current.name} emoji="📍"/>
          <Emoji
            className="today-city"
            name={current.name}
            emoji={current.name}
          />
        </h1>
        <span className="today-sticky-temperature"  style={{ width: '50%', height: '50%' }}>
          <Emoji
            name={current.weather[0].description}
            emoji={getEmoji(emoji)}
          />
          {current.main.temp}°
        </span>
      </div>
    );
  } else {
    return (
      <div>
        
        <h1 className="text-center">
          <Emoji name={current.name} emoji="📍" />
          <span  className="today-city">{current.name}</span>
        </h1>
      </div>
    );
  }
};

export default City;
