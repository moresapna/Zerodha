import React from "react";

function CreateTicket() {
  return (
    <div className="container lh-lg">
      
      {/* First Row */}
      <div className="row">

        {/* Account Opening */}
        <div className="col-4 mb-4">
          <h5 className="mb-3">Account opening</h5>

          <ul>
            <li><a href="#">Resident individual</a></li>
            <li><a href="#">Minor</a></li>
            <li><a href="#">Non Resident Indian (NRI)</a></li>
            <li><a href="#">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#">Glossary</a></li>
          </ul>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-4 mb-4">
          <h5 className="mb-3">Your Zerodha account</h5>

          <ul>
            <li><a href="#">Your Profile</a></li>
            <li><a href="#">Account modification</a></li>
            <li>
              <a href="#">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li><a href="#">Nomination</a></li>
            <li><a href="#">Transfer and conversion of securities</a></li>
          </ul>
        </div>

        {/* Trading and Markets */}
        <div className="col-4 mb-5">
          <h5 className="mb-3">Trading and markets</h5>

          <ul>
            <li><a href="#">IPO</a></li>
            <li><a href="#">Trading FAQs</a></li>
            <li>
              <a href="#">
                Margin Trading Facility (MTF) and Margins
              </a>
            </li>
            <li><a href="#">Charts and orders</a></li>
            <li><a href="#">Alerts and Nudges</a></li>
            <li><a href="#">General</a></li>
          </ul>
        </div>

      </div>


      {/* Second Row */}
      <div className="row">

        {/* Funds */}
        <div className="col-4 mb-3">
          <h5 className="mb-3">Funds</h5>

          <ul>
            <li><a href="#">Add money</a></li>
            <li><a href="#">Withdraw money</a></li>
            <li><a href="#">Add bank accounts</a></li>
            <li><a href="#">eMandates</a></li>
          </ul>
        </div>

        {/* Console */}
        <div className="col-4 mb-3">
          <h5 className="mb-3">Console</h5>

          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Corporate actions</a></li>
            <li><a href="#">Funds statement</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Segments</a></li>
          </ul>
        </div>

        {/* Mutual Funds */}
        <div className="col-4 mb-3">
          <h5 className="mb-3">Mutual funds</h5>

          <ul>
            <li><a href="#">Mutual funds</a></li>
            <li><a href="#">National Pension Scheme (NPS)</a></li>
            <li><a href="#">Fixed Deposit (FD)</a></li>
            <li><a href="#">Features on Coin</a></li>
            <li><a href="#">Payments and Orders</a></li>
            <li><a href="#">General</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default CreateTicket;