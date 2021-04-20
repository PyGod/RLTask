import React from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './components/Header/Header';
import { Container, Grid } from '@material-ui/core';
import AboutUs from './components/AboutUs/AboutUs';
import Cleaning from './components/Cleaning/Cleaning';

const MyContainer = withStyles({
  root: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})(Container);

const App = () => {
  return (
    <MyContainer maxWidth="xl">
      <Grid container spacing={0}>
        <Header />
        <AboutUs />
        <Cleaning />
      </Grid>
    </MyContainer>
  );
};

export default App;
