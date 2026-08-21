import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center py-5" style={{ color: "#666" }}>
        <h2 className="mb-3" style={{ color: "black" }}>
          Zerodha Products
        </h2>
        <h3 className="mb-4">Sleek, modern, and intuitive trading platforms</h3>
        <h5 className="mb-5">
          Check out our{" "}
          <a href="#">
            investment offerings<i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h5>
        <hr className=" mt-5"></hr>
      </div>
    </div>
  );
}

export default Hero;
