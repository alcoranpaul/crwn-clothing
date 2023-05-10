/*
 * File: cart-dropdown.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:52:05 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 9:57:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import Button from '../button/Button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'


const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
            <Button>Checkout</Button>
        </div>
    );
}

export default CartDropdown;