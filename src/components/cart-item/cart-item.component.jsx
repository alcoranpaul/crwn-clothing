/*
 * File: cart-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 9:19:02 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 11th May 2023 2:54:28 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;

