import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kids_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import Category from "./pages/Category'";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/men"
            element={<Category banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<Category banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Category banner={kids_banner} category="kid" />}
          />
          <Route path="/login" element={<Login/>}/>
          <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
