/*
 * File: cart-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 9:19:02 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 11:53:23 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { CartItemContainer, ItemDetailes } from './cart-item.styles'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailes>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailes>
        </CartItemContainer>
    );
}

export default CartItem;

