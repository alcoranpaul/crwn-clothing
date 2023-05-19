/*
 * File: checkout-item.component.jsx
 * Project: crwn-clothing
 * File Created: Friday, 12th May 2023 3:27:07 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 19th May 2023 12:12:35 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.contexts";

import {
    Quantity,
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton, Arrow, Value, BaseSpan
} from './checkout-item.styles'
const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartDropdownContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const increaseQuantity = () => addItemToCart(cartItem);
    const decreaseQuantity = () => removeItemFromCart(cartItem);
    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={deleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;