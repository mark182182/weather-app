import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import { Close, Error } from '@material-ui/icons';
import './weather-snackbar.css';

const WeatherSnackbar = props => {
  const { open, close } = props;

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={close}
        message={
          <span id="message">
            <Error id="error" />
            Location not found
          </span>
        }
        ContentProps={{ id: 'weather-snackbar' }}
        action={[
          <IconButton key="close" color="inherit" onClick={close}>
            <Close />
          </IconButton>,
        ]}
      />
    </>
  );
};

export default WeatherSnackbar;
