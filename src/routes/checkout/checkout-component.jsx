/*
 * File: checkout-component.jsx
 * Project: crwn-clothing
 * File Created: Thursday, 11th May 2023 3:56:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 11th May 2023 4:42:01 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.contexts";

import "./checkout-styles.scss";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartDropdownContext);
    return (
        <div className="checkout-containter">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                const { id, name, imageUrl, price, quantity } = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                    </div>
                );
            })}
            <span className="total">Total: 0</span>
        </div>
    );
};

export default Checkout;