/*
 * File: checkout-item.component.jsx
 * Project: crwn-clothing
 * File Created: Friday, 12th May 2023 3:27:07 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 12th May 2023 4:00:18 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.contexts";

import './checkout-item.styles.scss'
const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartDropdownContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const increaseQuantity = () => addItemToCart(cartItem);
    const decreaseQuantity = () => removeItemFromCart(cartItem);
    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseQuantity}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseQuantity}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteItem}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;