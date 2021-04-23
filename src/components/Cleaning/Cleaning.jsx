import React, { useEffect } from 'react';
import classes from './Cleaning.module.sass';
import global from '../../App.module.sass';
import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import image from '../../assets/images/Cleaning.svg';
import quotes from '../../assets/images/quotes.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cleaning = () => {
  useEffect(() => {
    Aos.init({ duration: 1517 });
  }, []);
  const MyH2 = withStyles({
    root: {
      fontSize: '50px',
      fontFamily: 'Roboto-Bold, sans-serif',
      lineHeight: '65px',
      display: 'flex',
    },
  })(Typography);
  return (
    <section
      data-aos="fade-up"
      className={`${classes.cleaning} ${global.block}`}
    >
      <Grid container>
        <Box className={global.content}>
          <Grid item xs={12} lg={6}>
            <Box data-aos="fade-up" className={classes.infoText}>
              <MyH2 component="h2" variant="h2" className={classes.title}>
                Як це працює?
              </MyH2>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <span className={classes.listImage}></span>
                  <div className={classes.listText}>
                    Ми прибираємо тільки погодинно. Більше не треба згадувати
                    кількість квадратних метрів квартири та розбиратися в
                    пакетах послуг чи відмінностях між «загальним» і
                    «генеральним» прибиранням.
                  </div>
                </li>
                <li className={classes.listItem}>
                  <span className={classes.listImage}></span>
                  <div className={classes.listText}>
                    Ви описуєте свої побажання по прибиранню, а наш клінер
                    оцінить задачі в годинах роботи і грошах.
                  </div>
                </li>
                <li className={classes.listItem}>
                  <span className={classes.listImage}></span>
                  <div className={classes.listText}>
                    У погодинний тариф ви можете включити будь що: вимити
                    санвузол, прибрати на балконі чи просто пропилисосити.
                  </div>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              className={classes.infoImage}
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <Box className={classes.circle}>
                <Box className={classes.circleImage}>
                  <img src={quotes} alt="" />
                </Box>
                <Box className={classes.circleText}>
                  Платіть лише за те, що потрібно вам. <br /> І нічого зайвого!
                </Box>
              </Box>
              <Box className={classes.imageWrapper}>
                <img src={image} alt="" className={classes.image} />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </section>
  );
};

export default Cleaning;
