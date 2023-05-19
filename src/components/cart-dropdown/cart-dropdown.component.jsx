/*
 * File: cart-dropdown.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:52:05 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 12:21:00 am
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
import { CartdropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'


const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartdropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
                ) :
                    (<EmptyMessage>Your Cart is empty</EmptyMessage>)}

            </CartItems>
            <Button onClick={goToCheckoutHandler}>
                Checkout
            </Button>
        </CartdropdownContainer>
    );
}

export default CartDropdown;