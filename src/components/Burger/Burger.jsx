import React, { useState } from 'react';
import classes from './Burger.module.sass';
import { NavLink } from 'react-router-dom';
const Burger = () => {
  const [sidebar, setSidebar] = useState(classes.close);

  return (
    <div>
      <nav className={classes.nav}>
        <div
          className={classes.burger}
          onClick={() =>
            setSidebar(sidebar === classes.open ? classes.close : classes.open)
          }
        >
          <i className={sidebar}></i>
          <i className={sidebar}></i>
        </div>
      </nav>
      {sidebar === classes.open && (
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
      )}
    </div>
  );
};

export default Burger;
