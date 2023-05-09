/*
 * File: products.contexts.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 9:44:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 9:49:36 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createContext, useState } from "react";
import PRODUCTS from '../assets/shop-data.json'

export const ProductsContext = createContext({
    products: [],

});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    );
};