/*
 * File: user.contexts.jsx
 * Project: crwn-clothing
 * File Created: Monday, 8th May 2023 4:48:23 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 8th May 2023 4:58:31 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: This component is the user context
 */

import { createContext, useState } from "react";

// Create a context object - actual values you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null); // Initial value is null
    const value = { currentUser, setCurrentUser } // Value that will be passed to the provider

    // Provider - component that allows consuming components to subscribe to context changes
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}