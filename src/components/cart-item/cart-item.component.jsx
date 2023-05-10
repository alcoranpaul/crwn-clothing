/*
 * File: cart-item.component.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 9:19:02 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 10:03:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
    const { name, quantity } = cartItem;
    return (
        <div className="cart-item">
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItem;

