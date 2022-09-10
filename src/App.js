import Navbar from "./Components/Navbar/Navbar.jsx"
import './App.css';
import {Routes,Route} from "react-router-dom"
import Product from "./Components/Product/Product"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login">Login</Route>
        <Route path="/"element={<Product />}>Homepage</Route>
        <Route path="/product/create">Create</Route>  
        <Route path="/product/:id">Product</Route>
        <Route path="/product/:id/edit">Edit Product</Route>
      </Routes>
    </div>
  );
}

export default App;
