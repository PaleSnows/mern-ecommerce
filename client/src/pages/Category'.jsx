import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../component/Item";
import { FaChevronDown } from "react-icons/fa";

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div className="px-32 mt-5">
        <img src={props.banner} alt="" />
      </div>
      <div className="px-32 py-5">
        <div className="flex flex-row justify-between py-3">
          <p>
            <span className="font-semibold">Showing 1-12</span> out of 36
            products
          </p>
          <button className="rounded-3xl px-7 py-3 flex bg-transparent border ">
            Sort by <FaChevronDown className="ml-2 mt-2 text-slate-600" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
        <div className="flex flex-row justify-center p-28">
          <button className="capitalize rounded-full bg-slate-500 text-slate-100 py-4 px-10">Explore more</button>
        </div>
    </div>
  );
};

export default Category;
