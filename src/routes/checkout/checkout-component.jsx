/*
 * File: checkout-component.jsx
 * Project: crwn-clothing
 * File Created: Thursday, 11th May 2023 3:56:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 25th May 2023 10:48:11 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.contexts";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-styles.jsx";

const Checkout = () => {
    const { cartItems, totalCartPrice } = useContext(CartDropdownContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Products</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <Total>Total: ${totalCartPrice}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;