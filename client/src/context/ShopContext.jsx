import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null); //1

// const eg = (
//   <div>
//     <h1>hello</h1>
//   </div>
// );
const getDefaultcart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart());
  const addTocart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  const removeFromcart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const contextValue = { all_product,cartItems,addTocart,removeFromcart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
