/*
 * File: navigation.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:31:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 5:15:01 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the navigation bar
 */

import { Outlet, Link } from 'react-router-dom'; // Outlet is a component that renders the child route's component
import { Fragment, useContext } from 'react'; // Fragment is a component that allows multiple components to be rendered without a parent div
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.style.scss';

/** Navigation Bar
 *
 * @returns Navigation bar
 */
function NavigationBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }


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
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>
                SIGN OUT
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )
          }

        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
