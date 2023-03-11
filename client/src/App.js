import './App.css';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/navbar" element={<Navbar />} />
    //   </Routes>
    // </Router>
    <div>
      <Landing />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
