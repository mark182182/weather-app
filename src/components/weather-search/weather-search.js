import React from 'react';
import { Grid, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';

const WeatherSearch = props => {
  const {
    getPosition,
    radius,
    handleRadiusChange,
    maxRows,
    handleMaxRowsChange
  } = props;

  return (
    <Grid container justify='space-between'>
      <Grid container item alignItems='center' xs={6}>
        <InputLabel>Location: </InputLabel>
        <TextField
          type='search'
          variant='outlined'
          placeholder='e.g. London'
          onKeyDown={getPosition} />
      </Grid>
      <Grid container item justify='flex-end' alignItems='center' xs={3}>
        <InputLabel>Radius: </InputLabel>
        <Select
          value={radius}
          variant='outlined'
          onChange={handleRadiusChange}>
          {Array.from(Array(20), (_, key) => (key + 1) * 10)
            .map(item => {
              return <MenuItem key={item} value={item}>{item}</MenuItem>;
            })}
        </Select>
      </Grid>
      <Grid container item justify='flex-end' alignItems='center' xs={3}>
        <InputLabel>Results: </InputLabel>
        <Select
          value={maxRows}
          variant='outlined'
          onChange={handleMaxRowsChange}>
          {[10, 20, 30, 40].map(item => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>;
          })}
        </Select>
      </Grid>
    </Grid>
  )
}

export default WeatherSearch;