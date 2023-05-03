import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNaviagtion() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meet ups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetups'>New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaviagtion;
