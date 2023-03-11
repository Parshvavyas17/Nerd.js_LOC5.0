import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/appContext";

function App() {
  const { token } = useContext(AppContext);
  return (
    <>
      {token ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/navbar" element={<Navbar />} />
          TOKEN FOUND
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/navbar" element={<Navbar />} />
          TOKEN NOT FOUND
        </Routes>
      )}
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/navbar" element={<Navbar />} />
    //   </Routes>
    // </Router>
    // <div>
    //   <Landing />
    //   <Navbar />
    // </div>
  );
}

export default App;
