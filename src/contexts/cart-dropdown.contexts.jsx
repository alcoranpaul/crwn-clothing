/*
 * File: cart-dropdown.contents.jsx
 * Project: crwn-clothing
 * File Created: Tuesday, 9th May 2023 7:57:22 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 9th May 2023 8:35:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isDropdownOpen: false, // default value
    setIsDropdownOpen: () => { } // dummy function
});

export const CartDropdownProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const value = { isDropdownOpen, setIsDropdownOpen };
    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    );
};