import React from "react";

const page = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-white font-bold text-5xl ">
          Contact Us & We'll Reply
        </h1>
        <p className="mt-3">
          You can send us your suggestions, comments or anything else here!
        </p>
      </div>
      <div className="mt-20 justify-self-center ">
        <form action="submit" className="">
          <input type="text" placeholder="Email" className="text-black" />
        </form>
      </div>
    </div>
  );
};

export default page;
