import { Routes, Route } from "react-router-dom";

import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";


function Shop() {
  return <h1>JELALSDAS</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        {/* Use this route below as the default for "/" */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;