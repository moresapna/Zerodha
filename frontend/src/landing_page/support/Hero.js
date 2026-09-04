import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        padding: "45px 0 50px",
      }}
    >
      <div className="container">

        {/* Heading + Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1
            style={{
              fontSize: "48px",
              color: "#424242",
              margin: 0,
            }}
          >
            Support Portal
          </h1>

          <button
            className="btn btn-primary"
            style={{
              fontSize: "18px",
              padding: "10px 20px",
            }}
          >
            My tickets
          </button>
        </div>

        {/* Search box */}
        <div
          className="bg-white d-flex align-items-center"
          style={{
            height: "75px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "0 30px",
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              fontSize: "20px",
              color: "#666",
              marginRight: "25px",
            }}
          ></i>

          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "20px",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;