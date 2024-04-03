import React from "react";
import hero from "../assets/hero_image.png";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import data_product from "../assets/data.js";
import Items from "../component/Items.jsx";

const Home = () => {
  return (
    <div>
      {/* banner image */}
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col justify-center px-24">
          <h1 className="uppercase font-semibold text-lg sm:text-xl text-slate-900">
            Top Quality Products
          </h1>
          <p className="text-2xl sm:text-5xl font-semibold py-2 mb-1 ">
            new <FaShoppingBag /> collections <br />
            for everyone
          </p>
          <button className="rounded-full bg-black text-slate-200 p-4 flex flex-row justify-center">
            Latest Collections <FaArrowRightLong className="pt-2" size={22} />
          </button>
        </div>
        <img src={hero} alt="" />
      </div>
      {/* promotional section */}
      <div className="pt-5 pl-3">
        <h1 className="text-center font-semibold text-2xl sm:text-5xl underline decoration-4    ">
          Popular in women
        </h1>

        <div className="inline sm:grid sm:grid-cols-4 px-40 mx py-10 gap-5">
          {data_product.map((item) => (
            <Items
              key={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
      {/* exclusive image */}
      <div className="">

      </div>
      {/* special offers and discount */}
      <div className=""></div>
      {/* newsletter */}
      <div className=""></div>
    </div>
  );
};

export default Home;
