import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<Home  />} />
          <Route path="/men" element={<Men category ="men" />} />
          <Route path="/women" element={<Women  category ="women" />} />
          <Route path="/kids" element={<Kids  category ="kids"/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
