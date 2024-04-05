import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { BsArrowRight } from "react-icons/bs";
import s1 from "../assets/star_icon.png";
import s2 from "../assets/star_dull_icon.png";
import Items from "../component/Items";
import data_product from "../assets/data.js";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <div className="flex m-8 px-40">
        Home <BsArrowRight className="mt-1" size={20} /> Shop{" "}
        <BsArrowRight className="mt-1" size={20} /> {product.category}{" "}
        <BsArrowRight className="mt-1 " size={20} /> {product.name}
      </div>
      <div className="px-40  m-10 flex ">
        <div className="flex gap-2   ">
          <div className="grid grid-rows-4 gap-2">
            <img className="h-32 w-32" src={product.image} alt="" />
            <img className="h-32 w-32" src={product.image} alt="" />
            <img className="h-32 w-32" src={product.image} alt="" />
            <img className="h-32  w-32" src={product.image} alt="" />
          </div>
          <img className=" h-auto  w-auto  " src={product.image} alt="" />
        </div>
        <div className="flex flex-col gap-5 mx-4 ">
          <h1 className="text-4xl font-semibold max-w-[600px]">
            {product.name}
          </h1>
          <div className="flex flex-row gap-2">
            <img src={s1} alt="" />
            <img src={s1} alt="" />
            <img src={s1} alt="" />
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <span>(122)</span>
          </div>
          <div className="flex flex-row gap-4">
            <h1 className="line-through text-slate-500">{product.old_price}</h1>
            <h1 className="font-semibold text-lg"> ${product.new_price}</h1>
          </div>
          <p className="line-clamp-2 text-sm">
            A lightweight, usually knited, pullover shirt, close-fitting and
            with a round neckline
            <br /> and short sleeves, worn as an undershirt or outer garment.
          </p>
          <div className="flex flex-col gap-5 mt-4">
            <h1 className="font-semibold text-lg">Select Size</h1>
            <div className="flex flex-row gap-3">
              <h1 className="border px-6 py-3">S</h1>
              <h1 className="border px-6 py-3">M</h1>
              <h1 className="border px-6 py-3">L</h1>
              <h1 className="border px-6 py-3">Xl</h1>
              <h1 className="border px-6 py-3">XXL</h1>
            </div>
          </div>
          <div className="mt-4">
            <button className="border px-12 py-4 bg-slate-700 text-slate-100">
              Add To Cart
            </button>
          </div>
          <div className="mt-3">
            <p className="capitalize">Category :{product.category},T-shirt</p>
            <p>Tags :Modern, Latest</p>
          </div>
        </div>
      </div>
      <div className="px-40 m-8">
        <div className="flex flex-row ">
          <h1 className="border px-10 py-4">Description</h1>
          <h1 className="border px-10 py-4">Review(122)</h1>
        </div>
        <div className="border p-8 text-sm flex flex-col gap-3">
          <p className="">
            An e-commerce website serves as an online marketplace where
            businesses and consumers interact, facilitating the buying and
            selling of products and services over the internet. At its core,
            such a platform presents an extensive array of offerings, ranging
            from consumer goods and electronics to clothing, accessories, and
            beyond. The website provides an intuitive interface for users to
            navigate through product categories, view detailed descriptions, and
            compare prices and features. Utilizing search functionalities and
            filtering options, customers can easily pinpoint items of interest
            amidst the vast selection.
          </p>
          <p>
            Once satisfied with their choices, they proceed to a streamlined
            checkout process, where they input shipping details, select payment
            methods, and finalize their purchases securely. In addition to
            facilitating transactions, e-commerce websites often incorporate
            features for user account management, order tracking, customer
            support, and personalized recommendations, enhancing the overall
            shopping experience.
          </p>
        </div>
      </div>

      <div className="pt-5 px-8 ">
        <h1 className="text-center font-semibold text-3xl sm:text-5xl underline decoration-4    ">
          Related Products
        </h1>

        <div className="inline sm:grid sm:grid-cols-4 px-40 mx py-10 gap-5">
          {data_product.map((item) => (
            <Items
              key={item.id}
              name={item.name}
              image={item.image}
              id={item.id}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
