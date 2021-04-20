import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './Button.module.sass';
import { withStyles } from '@material-ui/core';
const BookingButton = (props) => {
  const ColorButton = withStyles({
    containedSecondary: {
      backgroundColor: '#FF4387',
      borderRadius: '150px',
      textTransform: 'none',
      padding: '16px 30px',
      fontSize: '17px',
      lineHeight: '24px',
    },
  })(Button);

  return (
    <ColorButton
      variant="contained"
      color="secondary"
      className={classes.button}
    >
      {props.text}
    </ColorButton>
  );
};

export default BookingButton;
