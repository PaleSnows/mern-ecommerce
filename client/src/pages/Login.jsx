import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row justify-center gap-5 my-20  ">
      <div className="flex flex-col justify-center border my-5 p-8 ">
        <div className="mx-4 my-3">
          <h1 className="font-semibold text-3xl">Sign Up</h1>
        </div>
        <div className="flex flex-col gap-5 px-4">
          <input
            className="border  p-4"
            type="text"
            name=""
            id=""
            placeholder="Your Name"
          />
          <input type="email" className="border  p-4" name="" id="" placeholder="Email Address" />
          <input type="password" className="border  p-4" name="" id="" placeholder="Password" />
          <button className=" border p-4 bg-slate-300 text-slate-900">Continue</button>
        </div>
        <div className="p-4 gap-3 flex flex-col mt-2">
          <p>
            Already have an account? <span className="text-red-600  ">Login here</span>
          </p>
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
