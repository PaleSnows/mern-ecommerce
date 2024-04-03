import React from "react";

const Items = (props) => {
  return (
    <div className="    ">
      <div className="">
        <img  src={props.image}></img>
        <h1 className="line-clamp-4  text-slate-700">{props.name}</h1>
        <div className="flex sm:flex-row flex-col gap-5">
          <h1 className="font-bold text-slate-900">${props.new_price}</h1>
          <h1 className="line-through text-slate-500/80">${props.old_price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Items;
