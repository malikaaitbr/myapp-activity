
export const hasGeolocationSupport = () => {
  return !!navigator.geolocation;
};

export const getEmoji = (weather) => {
  const weatherLC = weather.toLowerCase();
  if (weatherLC.startsWith("cloud")) {
    return '☁️';
  } else if (weatherLC === 'rain') {
    return '🌧️';
  } else if (weatherLC === 'sun') {
    return '☀️';
  } else if (weatherLC === 'clear') {
    return '☀️'; // "🌈" "🌌";
  } else if (weatherLC === 'snow') {
    return '❄️';
  } else if (weatherLC === 'extreme') {
    return '🌩️';
  }
};
