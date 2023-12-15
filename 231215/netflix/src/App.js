import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetail";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
