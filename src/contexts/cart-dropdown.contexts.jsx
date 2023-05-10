/*
 * File: cart-dropdown.contents.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:57:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 10:05:24 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { createContext, useState } from "react";

/** Add an item to the cart
 *  
 * @param {*} cartItem - the cart item
 * @param {*} productToAdd - the product to add
 * @returns 
 */
const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id); //find the item in the cart

    if (existingCartItem) { //if the item is already in the cart
        return cartItems.map(cartItem => //increase the quantity of the item
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }] //else add the item to the cart

}

export const CartDropdownContext = createContext({
    isDropdownOpen: false, // default value
    setIsDropdownOpen: () => { }, // dummy function
    cartItems: [], // default for cartItems
    addItemToCart: () => { }, // dummy function
});

export const CartDropdownProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    /** Add an item to the cart
     *  
     * @param {*} product 
     */
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const value = { isDropdownOpen, setIsDropdownOpen, cartItems, addItemToCart }; //Public functions and variables
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    );
};