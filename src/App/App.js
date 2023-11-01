import "./App.css";

// import react-router-dom
import { Route, Routes } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Facilities from "../Components/Facilities/Facilities"

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/rooms" element={<Room/>} />
        <Route exact path="/" element={<Facilities/>}/>
        <Route exact path="/rooms/:slug" element={<SingleRoom/>} />
        <Route component={Error} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
