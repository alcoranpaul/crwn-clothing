/*
 * File: App.js
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 5:26:09 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 27th May 2023 11:36:21 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Main application component
 */

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";


import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../src/utils/firebase/firebase.utils";
import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-component";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => { // Unsuscribe from the listener when the component unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) { // If user is not null
        createUserDocumentFromAuth(user); // Create user document
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;