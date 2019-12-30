import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardMedia,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { WEATHER_ICON } from '../../constants/urls';
import './weather-card.css';

const WeatherCard = props => {
  const { cityWeather } = props;

  const renderCard = () => {
    return (
      <Card className="weather-card">
        <CardMedia
          image={WEATHER_ICON + cityWeather.weather[0].icon + '@2x.png'}
          className="weather-card-icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cityWeather.name}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary" component="p">
            {cityWeather.weather[0].description}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary" component="p">
            {Math.floor(cityWeather.main.temp - 273.15) + '\u2103'}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const renderSkeleton = () => {
    return <Skeleton variant="rect" className="weather-card-skeleton" />;
  };

  return <>{cityWeather.name ? renderCard() : renderSkeleton()}</>;
};

export default WeatherCard;
