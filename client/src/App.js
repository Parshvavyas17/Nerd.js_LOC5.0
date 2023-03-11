import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Authentication/Login"
import SignupCompany from "./pages/Authentication/SignupCompany";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/appContext";

function App() {
  const { token } = useContext(AppContext);
  return (
    <>
         <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={< SignupCompany/>} />
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
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
