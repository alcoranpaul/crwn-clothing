import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/signin.component";


function Shop() {
  return <h1>JELALSDAS</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;