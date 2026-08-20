import React from "react";

function Stats() {
  return (
    <div className="container Stats-info mt-5 mb-5">
      <div className="row">
        <div className="col-5 mt-5">
          <h2>Trust with confidence</h2>
          <h3 className="mt-5">Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#">Our philosophies.</a>
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p>
            With initiatives like <a href="#">Nudge</a> and{" "}
            <a href="#">Kill Switch</a>, we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 pt-5 mt-4">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <div className="flex justify-center mt-5 mb-5">
            <a href="#" style={{ marginLeft: "100px" }}>
              Explore our products
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#" style={{ marginLeft: "100px" }}>
              Try Kite demo
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
