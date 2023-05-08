/*
 * File: navigation.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:31:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 4:44:51 pm
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
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
