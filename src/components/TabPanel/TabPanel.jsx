import React from 'react';
import classes from './TabPanel.module.sass';
import { NavLink } from 'react-router-dom';


const TabPanel = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <NavLink to="1" activeClassName={classes.active}>
            Хто ми
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink to="2" activeClassName={classes.active}>
            Як це працює
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink to="3" activeClassName={classes.active}>
            Ціна
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink to="4" activeClassName={classes.active}>
            Популярні питання
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink to="5" activeClassName={classes.active}>
            Котакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TabPanel;
