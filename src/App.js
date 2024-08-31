import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, createContext } from "react";
import ProductDetails from "./pages/shop/Products/ProductDetails";


export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <cartContext.Provider value={{ cart, setCart }}>
        <Router>
          <Navbar cart={cart} />
          <Home />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
          </Routes>
          <Footer />
        </Router>
      </cartContext.Provider>
    </div>
  );
}

export default App;
