import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
      </Routes>
    </div>
  );
}

export default App;
