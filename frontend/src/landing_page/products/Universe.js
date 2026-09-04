import React from "react";

function Universe() {
  return (
    <div
      className="container text-center"
      style={{ color: "#9b9b9b", fontSize: "12px" }}
    >
      <div className="row">
        <div className="mb-5">
          <h4 style={{ color: "#666" }} className="py-5">Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</h4>
          <h3 style={{ color: "black" }} className="mt-5">The Zerodha Universe</h3>
          <h5 className="mt-4 mb-5" style={{ color: "#666" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col">
          <img src="media/images/sensibullLogo.svg" style={{ width: "65%" }} />
        </div>
        <div className="col">
          <img src="media/images/tijori.svg" style={{ width: "45%" }} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>
            Our asset management venture<br></br>that is creating simple and
            transparent index<br></br>funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <p>
            Options trading platform that lets you<br></br>create strategies,
            analyze positions, and examine<br></br>data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col">
          <p>
            Investment research platform<br></br>that offers detailed insights
            on stocks,<br></br>sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/streakLogo.png" style={{ width: "47%" }} />
        </div>
        <div className="col">
          <img src="media/images/smallcaseLogo.png" style={{ width: "55%" }} />
        </div>
        <div className="col">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>
            Systematic trading platform<br></br>that allows you to create and
            backtest<br></br>strategies without coding.
          </p>
        </div>
        <div className="col">
          <p>
            Thematic investing platform<br></br>that helps you invest in
            diversified<br></br>baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <p>
            Personalized advice on life<br></br>and health insurance. No spam
            <br></br>and no mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <button className="btn btn-primary btn-lg px-5 mt-5">Sign up for free</button>
    </div>
  );
}

export default Universe;
