/*
 * File: cart.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:41:36 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:46:14 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles'


const CartIcon = () => {
    const { isDropdownOpen, setIsDropdownOpen, totalCartItems } = useContext(CartDropdownContext);
    // toggle dropdown
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIconContainer />
            <ItemCount>{totalCartItems}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;