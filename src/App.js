import Aboutpage from "./pages/Aboutpage";
import Bookpage from "./pages/Bookpage";
import Contactpage from "./pages/Contactpage";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Bookdetailspage from "./pages/Bookdetailspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/book" element={<Bookpage />} />
        <Route path="/bookdeatails" element={<Bookdetailspage />} />
        {/* <Route path="*" element={<Errorpage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

