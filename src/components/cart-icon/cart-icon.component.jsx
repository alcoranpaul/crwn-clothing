/*
 * File: cart.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:41:36 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 8:33:34 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isDropdownOpen, setIsDropdownOpen } = useContext(CartDropdownContext);

    // toggle dropdown
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}
export default CartIcon;