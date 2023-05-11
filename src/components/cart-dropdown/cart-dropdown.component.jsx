/*
 * File: cart-dropdown.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:52:05 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 11th May 2023 4:08:12 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';
import Button from '../button/Button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'


const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
            <Button onClick={goToCheckoutHandler}>
                Checkout
            </Button>
        </div>
    );
}

export default CartDropdown;