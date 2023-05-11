/*
 * File: cart-dropdown.contents.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:57:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 11th May 2023 4:36:25 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { createContext, useState, useEffect } from "react";

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

/** Remove an item from the cart
 * 
 * @param {*} cartItems  - the cart items
 * @param {*} productToRemove  - the product to remove
 * @returns  - the cart items
 */
const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id); //find the item in the cart
    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== productToRemove.id); //filter the cart items
        } //if the quantity is 1


        return cartItems.map(cartItem =>
            cartItem.id === productToRemove.id ? //if the item is already in the cart
                { ...cartItem, quantity: cartItem.quantity - 1 } //decrease the quantity of the item
                : cartItem //else return the cart item
        )
    }
}

export const CartDropdownContext = createContext({
    isDropdownOpen: false, // default value
    setIsDropdownOpen: () => { }, // dummy function
    cartItems: [], // default for cartItems

    addItemToCart: () => { }, // dummy function
    removeItemFromCart: () => { }, // dummy function
    totalCartItems: 0 // default value
});

export const CartDropdownProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);

    useEffect(() => {
        const cartCount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0)
        setTotalCartItems(cartCount);
    }, [cartItems]);

    // Add an item to the cart
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    // Remove an item from the cart
    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    };

    const value = {
        isDropdownOpen, setIsDropdownOpen,
        cartItems, addItemToCart,
        totalCartItems, removeItemFromCart
    }; //Public functions and variables
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    );
};