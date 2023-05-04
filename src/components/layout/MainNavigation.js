import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./styles/MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNaviagtion() {
  const [isOpen, setOpen] = useState(false);
  const favoriteCtx = useContext(FavoritesContext);

  const mobileMenuHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meet Up Tracker</div>
      <nav>
        <ul id={classes.menu}>
          <li>
            <Link className={classes.link} to="/">
              All Meetups
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/new-meetups">
              New Meetups
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <div id={classes.hamburgerIcon} onClick={mobileMenuHandler} className={isOpen ? 'open' : ''}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
        <ul className={classes.mobileMenu}>
          <li>
            <Link className={classes.link} to="/">
              All Meetups
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/new-meetups">
              New Meetups
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNaviagtion;
