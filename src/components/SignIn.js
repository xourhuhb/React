import React from "react";

const SignIn = ({handleClose}) => {
  return (
    <div className="h-full p-12">
        <button onClick={handleClose}>Close</button>
      <h1 className="mt-6 font-semibold text-3xl">Login</h1>
      <p className="flex text-sm">
        or <p className="text-orange-500 ml-1 text-sm font-semibold">create an account</p>
      </p>
      <div className="w-10 h-0.5 bg-black mt-4"></div>
      <div class="relative">
        <input
          type="tel"
          id="floating_filled"
          class="block font-medium  border-stone-400 px-6 py-6 w-72 mt-9 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700  border appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute mt-1 text-base font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-400 peer-focus:dark:text-slate-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Phone number
        </label>
      </div>
      <button className="font-sans font-semibold text-sm text-white border bg-orange-500 w-72 py-3 mt-4 hover:shadow-md">
        LOGIN
      </button>
      <p className=" flex flex-wrap text-gray-400 font-semibold  text-xs">
        By clicking on Login, I accept the
        <p className="text-black ml-1">Terms & Conditions & Privacy Policy</p>
      </p>
    </div>
  );
};

export default SignIn;
