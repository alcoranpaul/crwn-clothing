/*
 * File: cart-dropdown.contents.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:57:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 26th May 2023 7:21:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

/** Delete an item from the cart
 * 
 * @param {*} cartItems - the cart items
 * @param {*} productToDelete - the product to delete
 * @returns 
 */
const deleteCartItem = (cartItems, productToDelete) =>
    cartItems.filter(cartItem => cartItem.id !== productToDelete.id); //filter the cart items

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const INITIAL_STATE = {
    cartItems: [],
    totalCartItems: 0,
    totalCartPrice: 0,
    isDropdownOpen: false
}


const cartReducer = (state, action) => {
    const { type, payload } = action;  // Destructure action object
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, //Spread the previous state
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state, //Spread the previous state
                isDropdownOpen: payload
            }

        default:
            throw new Error(`Unhandled action type: ${type} in cartReducer`);
    }
}



export const CartDropdownContext = createContext({
    isDropdownOpen: false, // default value
    setIsDropdownOpen: () => { }, // dummy function
    cartItems: [], // default for cartItems

    totalCartItems: 0, // default value
    totalCartPrice: 0, // default value
    addItemToCart: () => { }, // dummy function
    removeItemFromCart: () => { }, // dummy function
    deleteItemFromCart: () => { }, // dummy function
});

export const CartDropdownProvider = ({ children }) => {

    const [{ cartItems, totalCartItems, totalCartPrice, isDropdownOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        // Generate Cart Count
        const cartCount = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0)

        // Generate Cart Price
        const cartPrice = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0)

        dispatch(createAction(
            CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                totalCartItems: cartCount,
                totalCartPrice: cartPrice
            }
        ))
    }

    // Add an item to the cart
    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    };

    // Remove an item from the cart
    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    };

    // Delete an item from the cart
    const deleteItemFromCart = (product) => {
        const newCartItems = deleteCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const setIsDropdownOpen = (isOpen) => {
        dispatch(
            createAction(
                CART_ACTION_TYPES.SET_IS_CART_OPEN,
                isOpen))
    }

    const value = {
        isDropdownOpen, setIsDropdownOpen,
        cartItems, addItemToCart,
        totalCartItems, removeItemFromCart,
        totalCartPrice, deleteItemFromCart
    }; //Public functions and variables
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    );
};