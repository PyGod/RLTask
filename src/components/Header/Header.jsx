import React, { useEffect } from 'react';
import classes from './Header.module.sass';
import global from '../../App.module.sass';
import { Grid, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';
import TabPanel from '../TabPanel/TabPanel';
import image from '../../assets/images/Header.svg';
import BookingButton from '../Button/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Burger from '../Burger/Burger';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1517 });
  }, []);

  const MyH2 = withStyles({
    root: {
      fontSize: '66px',
      fontFamily: 'Roboto-Bold, sans-serif',
      lineHeight: '79px',
      width: '100%',
      '@media (max-width: 375px)': {
        fontSize: '40px',
        lineHeight: '52px',
      },
      '@media (max-width: 480px)': {
        fontSize: '40px',
        lineHeight: '52px',
      },
    },
  })(Typography);

  const MyP = withStyles({
    root: {
      display: 'flex',
      fontSize: '21px',
      fontFamily: 'Montserrat-Regular, sans-serif',
      lineHeight: '35px',
      width: '350px',
      '@media (max-width:375px)': {
        display: 'flex',
        alignSelf: 'start',
        fontSize: '18px',
        lineHeight: '29px',
        width: '100%',
      },
      '@media (max-width:480px)': {
        display: 'flex',
        alignSelf: 'start',
        fontSize: '18px',
        lineHeight: '29px',
        width: '100%',
      },
    },
  })(Typography);

  return (
    <header  className={`${classes.header} ${global.block} cd-section visible`}>
      <Grid container>
        <Box className={classes.headerTop}>
          <Grid item sm={1} lg={3} className={classes.logo}>
            <NavLink to="/">Omega</NavLink>
          </Grid>
          <Grid item lg={6} className={classes.tabpanel}>
            <TabPanel />
          </Grid>
          <Grid item lg={3} className={classes.number}>
            <Typography
              component="div"
              className={classes.number}
              style={{
                fontFamily: 'Montserrat-Regular, sans-serif',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              +38 077 777 77 77
            </Typography>
          </Grid>
          <Grid item sm={2} className={classes.burger}>
            <Burger />
          </Grid>
        </Box>
        <Box className={global.content}>
          <Grid item xs={12} lg={5}>
            <Box className={classes.contentInfo}>
              <MyH2 component="h2" variant="h2" className={`${classes.title} `}>
                <div className={`${classes.divWrapper} `}>
                  <div
                    className={`${classes.divPadding} ${classes.one} ${classes.fadeInUp} ${classes.animate}`}
                  >
                    Твій
                  </div>
                  <div
                    className={`${classes.divPadding} ${classes.two} ${classes.fadeInUp} ${classes.animate}`}
                  >
                    сервіс
                  </div>
                </div>
                <div className={classes.divWrapper}>
                  {' '}
                  <div
                    className={`${classes.divPadding} ${classes.three} ${classes.fadeInUp} ${classes.animate}`}
                  >
                    з
                  </div>
                  <div
                    className={` ${classes.divPadding} ${classes.four} ${classes.fadeInUp} ${classes.animate}`}
                  >
                    прибирання
                  </div>
                </div>
              </MyH2>
              <MyP
                component="p"
                className={`${classes.paragraph} ${classes.fadeInUp} ${classes.animate} `}
              >
                Дім — для відпочинку, а прибирання вдома — для нас.
              </MyP>
              <Box
                className={`${classes.button} ${classes.fadeInUp} ${classes.animate} `}
              >
                <BookingButton text="Замовити прибирання" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={7}>
            <Box className={classes.imageWrapper}>
              <img src={image} alt="" className={classes.image} />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </header>
  );
};

export default Header;
