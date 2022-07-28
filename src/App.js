// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemDetailContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/detalle/:idDetalle" element={<ItemDetailContainer />} />
        </Routes>
        {/* <ItemListContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
