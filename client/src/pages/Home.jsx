import React from "react";
import hero from "../assets/hero_image.png";
import exclusive from "../assets/exclusive_image.png";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import data_product from "../assets/data.js";
import new_collection from "../assets/new_collections.js";
import Items from "../component/Items.jsx";

const Home = () => {
  return (
    <div className="mt-5">
      {/* banner image */}
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col  justify-center px-5 sm:px-24">
          <h1 className="uppercase font-semibold text-lg sm:text-xl text-slate-900">
            Top Quality Products
          </h1>
          <p className="text-xl sm:text-5xl font-semibold py-2 mb-1 ">
            new <FaShoppingBag /> collections <br />
            for everyone
          </p>
          <button className="rounded-full bg-black text-slate-200 p-4 flex flex-row justify-center">
            Latest Collections <FaArrowRightLong className="ml-2 mt-1" size={22} />
          </button>
        </div>
        <img src={hero} alt="" />
      </div>
      {/* promotional section */}
      <div className="pt-5 px-8 ">
        <h1 className="text-center font-semibold text-3xl sm:text-5xl underline decoration-4    ">
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
      {/* exclusive image & offers */}
      <div className="flex flex-col sm:flex-row justify-between pt-20 gap-4   ">
        <div className=" flex flex-col justify-center mx-auto gap-5 ">
          <h1 className="capitalize font-semibold text-2xl sm:text-5xl">
            Exclusive
          </h1>
          <h1 className="capitalize font-semibold text-2xl sm:text-5xl">
            Offers for you
          </h1>
          <p className="text-sm sm:text-xl">Only on best sellers product</p>
          <button className="rounded-3xl w-40 sm:w-60 bg-black text-slate-200 p-4">
            Check Now
          </button>
        </div>
        <div className="mx-auto">
          <img src={exclusive} alt="" />
        </div>
      </div>
      {/* new collection */}
      <div className="pt-10 px-8  ">
        <h1 className="text-center font-semibold text-3xl sm:text-5xl underline decoration-4    ">
          New Collection
        </h1>

        <div className="inline sm:grid sm:grid-cols-4 px-40 mx py-10 gap-5">
          {new_collection.map((item) => (
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
      {/* newsletter */}
      <div className=" justify-center text-center py-10  ">
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-bold text-4xl">
            Get exclusive offers on your email
          </h1>
          <p className="capitalize">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="pt-1 ">
            <input
              className="bg-slate-200 capitalize  rounded-l-full border-none text-slate-100 sm:w-3/12  p-5"
              type="email"
              placeholder="Your email id..."
            ></input>
            <button className="rounded-r-full bg-slate-800 text-slate-100 sm:w-1/12   border-none  p-5">
              Subscibe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
