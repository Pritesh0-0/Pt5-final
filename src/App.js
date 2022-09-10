import Navbar from "./Components/Navbar/Navbar.jsx"
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path = "/Homepage" element = {<Homepage />}></Route>
        <Route path="/product/create">Create</Route>  
        <Route path="/product/:id">Product</Route>
        <Route path="/product/:id/edit">Edit Product</Route>
      </Routes>
    </div>
  );
}

export default App;
