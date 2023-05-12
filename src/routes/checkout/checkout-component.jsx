/*
 * File: checkout-component.jsx
 * Project: crwn-clothing
 * File Created: Thursday, 11th May 2023 3:56:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 12th May 2023 4:03:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.contexts";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout-styles.scss";

const Checkout = () => {
    const { cartItems, totalCartPrice } = useContext(CartDropdownContext);
    return (
        <div className="checkout-container">
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
            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <span className="total">Total: ${totalCartPrice}</span>
        </div>
    );
};

export default Checkout;