import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Divider } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import './weather-card.css';

const WeatherCard = props => {
  const { cityWeather } = props;

  const renderCard = () => {
    return <Card className='weather-card'>
      <CardMedia
        title={cityWeather.weather[0].main}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {cityWeather.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {cityWeather.weather[0].main}
          <Divider />
          {cityWeather.weather[0].description}
          <Divider />
          {Math.floor(cityWeather.main.temp - 273.15) + '\u2103'}
        </Typography>
      </CardContent>
    </Card>
  }

  const renderSkeleton = () => {
    return <Skeleton variant="rect" width={210} height={118} />
  }

  return (
    <>
      {cityWeather ? renderCard() : renderSkeleton()}
    </>
  )
}

export default WeatherCard;