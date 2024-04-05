import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="    ">
      <div className="">
        <Link to={`/product/${props.id}`}>
          <img className="hover:scale-105 transition" src={props.image} onClick={window.scrollTo(0,0)}></img>
        </Link>
        <h1 className="line-clamp-4 mt-2  text-slate-700">{props.name}</h1>
        <div className="flex sm:flex-row flex-col gap-5">
          <h1 className="font-bold text-slate-900">${props.new_price}</h1>
          <h1 className="line-through text-slate-500/80">${props.old_price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Items;
