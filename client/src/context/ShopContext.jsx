import { createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null); //1

// const eg = (
//   <div>
//     <h1>hello</h1>
//   </div>
// );

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
