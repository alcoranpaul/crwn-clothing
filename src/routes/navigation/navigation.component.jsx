/*
 * File: navigation.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:31:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 4th May 2023 12:03:27 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the navigation bar
 */

import { Outlet, Link } from 'react-router-dom'; // Outlet is a component that renders the child route's component
import { Fragment } from 'react'; // Fragment is a component that allows multiple components to be rendered without a parent div

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

/** Navigation Bar
 *
 * @returns Navigation bar
 */
function NavigationBar() {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          // Renders logo on the left side
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          // Renders links on the right side
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/signIn'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
