import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Genre from "./pages/Genre";
import Movie from "./pages/Movie";
import Casting from "./pages/Casting";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres/:id" element={<Genre />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movie/:id/casting" element={<Casting />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
