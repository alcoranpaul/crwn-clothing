/*
 * File: navigation.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:31:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 8:31:35 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the navigation bar
 */

import { Outlet, Link } from 'react-router-dom'; // Outlet is a component that renders the child route's component
import { Fragment, useContext } from 'react'; // Fragment is a component that allows multiple components to be rendered without a parent div
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.style.scss';

/** Navigation Bar
 *
 * @returns Navigation bar
 */
function NavigationBar() {
  const { currentUser } = useContext(UserContext)
  const { isDropdownOpen } = useContext(CartDropdownContext);

  const signOutHandler = async () => {
    await signOutUser();
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

          <CartIcon />
        </div>
        {isDropdownOpen && <CartDropdown />} {/*If isDropdownOpen is true, then render the CartDropdown component */}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
