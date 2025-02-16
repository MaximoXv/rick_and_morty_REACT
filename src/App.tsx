import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Episodes from "./pages/episodes";
import Locations from "./pages/locations";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;
