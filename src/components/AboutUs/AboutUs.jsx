import React, { useEffect } from 'react';
import classes from './AboutUs.module.sass';
import global from '../../App.module.sass';
import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import image from '../../assets/images/AboutUs.svg';
import vector from '../../assets/images/Vector.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1517 });
  }, []);
  const MyTypography = withStyles({
    root: {
      fontFamily: 'Montserrat-Regular, sans-serif',
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '15px',
    },
  })(Typography);

  const MySpan = withStyles({
    root: {
      fontSize: '15px',
      fontFamily: 'Montserrat-Regular, sans-serif',
      lineHeight: '28px',
      fontWeight: '700',
      textTransform: 'uppercase',
      '@media (max-width:375px)': {
        lineHeight: '30px',
      },
      '@media (max-width:480px)': {
        lineHeight: '30px',
      },
    },
  })(Typography);

  const MyH2 = withStyles({
    root: {
      fontFamily: 'Roboto-Bold, sans-serif',
      height: '100%',
      paddingBottom: '111px',
      fontSize: '50px',
      '@media (max-width:375px)': {
        paddingBottom: '27px',
      },
      '@media (max-width:480px)': {
        paddingBottom: '27px',
      },
    },
  })(Typography);

  const MyHiglight = withStyles({
    body1: {
      fontFamily: 'Montserrat-Bold, sans-serif',

      fontSize: '20px',
      width: '100%',
      padding: '4px',
      background: '#F5EBDD',
      borderRadius: '3px',
      '@media (max-width:375px)': {
        padding: '2px',
      },
      '@media (max-width:480px)': {
        padding: '2px',
      },
    },
  })(Typography);

  const CircleText = withStyles({
    body1: {
      fontSize: '30px',
      fontWeight: '700',
      fontFamily: 'Puritan-Regular, sans-serif',
      lineHeight: '33px',
      '@media (max-width:375px)': {
        fontSize: '18px',
      },
      '@media (max-width:480px)': {
        fontSize: '18px',
      },
    },
  })(Typography);

  return (
    <section
      data-aos="fade-up"
      className={`${classes.aboutUs} ${global.block} `}
    >
      <Grid container>
        <Box className={global.content}>
          <Grid item lg={6}>
            <Box data-aos="fade-up" className={classes.contentLeft}>
              <MySpan component="span">Хто ми</MySpan>
              <MyH2 component="h2" variant="h2" className={classes.title}>
                Omega — це новий підхід у сфері клінінгу
              </MyH2>
              <Box className={classes.image}>
                <img src={image} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              data-aos="fade-down"
              data-aos-delay="150"
              className={classes.contentRight}
            >
              <Box className={classes.dialogWrapper}>
                <MyTypography component="p" className={classes.dialog}>
                  Limpi – це великий досвід у клінінговому бізнесі та цифрова
                  інфраструктура. Ми швидші, гнучкіші і зручніші за інші
                  компанії.
                </MyTypography>
                <Box className={classes.vector}>
                  <img src={vector} alt="" />
                </Box>
              </Box>
              <Box className={classes.dialogWrapper}>
                <MyTypography component="p" className={classes.dialog}>
                  Ми змінили бізнес-модель клінінгових сервісів. Більше немає
                  дорогих складів з матеріалами та офісів. Тільки онлайн. Саме
                  тому ми можемо надавати послуги{' '}
                  <MyHiglight className={classes.higlight} component="span">
                    <strong>дешевше</strong>
                  </MyHiglight>
                  {` `} та{' '}
                  <MyHiglight className={classes.higlight} component="span">
                    <strong>якісніше</strong>
                  </MyHiglight>
                  .
                </MyTypography>
                <Box className={classes.vector}>
                  <img src={vector} alt="" />
                </Box>
              </Box>

              <Box className={classes.circle}>
                <CircleText component="span">Omega</CircleText>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </section>
  );
};

export default AboutUs;
