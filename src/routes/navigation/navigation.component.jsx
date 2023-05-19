/*
 * File: navigation.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 8:31:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 18th May 2023 3:23:23 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the navigation bar
 */

import { Outlet } from 'react-router-dom'; // Outlet is a component that renders the child route's component
import { Fragment, useContext } from 'react'; // Fragment is a component that allows multiple components to be rendered without a parent div
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavLink, NavLinks, NavigationContainer, LogoContainer } from './navigation.styles';

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
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isDropdownOpen && <CartDropdown />} {/*If isDropdownOpen is true, then render the CartDropdown component */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default NavigationBar;
