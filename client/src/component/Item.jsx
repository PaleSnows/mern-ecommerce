import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="">
      <Link to={`/product/${props.id}`}>
        <img className="hover:scale-105 transition " src={props.image} alt="" />
      </Link>
      <h1 className="text-sm pt-2">{props.name}</h1>
      <div className="flex gap-4">
        <h1 className="text-slate-900 font-semibold">${props.new_price}</h1>
        <h1 className="line-through text-slate-500">${props.old_price}</h1>
      </div>
    </div>
  );
};

export default Item;
