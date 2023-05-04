/*
 * File: App.js
 * Project: crwn-clothing
 * File Created: Tuesday, 2nd May 2023 5:26:09 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 3rd May 2023 11:53:08 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Main application component
 */


import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/signin.component";


function Shop() { // Temporary
  return <h1>JELALSDAS</h1>
}

function App() {
  return (
    <Routes> // Routes are defined here
      <Route path="/" element={<NavigationBar />}> // Navigation bar is always visible
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;