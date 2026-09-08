import React, { useContext } from "react";
import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../data/data";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";


// =====================================================
// WATCHLIST
// =====================================================

const WatchList = () => {

  // Chart labels
  const labels = watchlist.map((stock) => stock.name);

  // Chart data
  const data = {
    labels: labels,

    datasets: [
      {
        label: "Price",

        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "#387ed1",
          "#ff5722",
          "#4caf50",
          "#9c27b0",
          "#ffc107",
          "#00bcd4",
          "#e91e63",
          "#795548",
        ],

        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container">

      {/* =========================================
          SEARCH
      ========================================= */}

      <div className="search-container">

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy bse, nifty fut, etc"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>

      </div>


      {/* =========================================
          WATCHLIST ITEMS
      ========================================= */}

      <ul className="list">

        {watchlist.map((stock) => {

          return (
            <WatchListItem
              stock={stock}
              key={stock.name}
            />
          );

        })}

      </ul>


      {/* =========================================
          DOUGHNUT CHART
      ========================================= */}

      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "30px auto",
        }}
      >
        <DoughnutChart data={data} />
      </div>

    </div>
  );
};


// =====================================================
// WATCHLIST ITEM
// =====================================================

const WatchListItem = ({ stock }) => {

  return (
    <li>

      <div className="item">

        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>


        <div className="item-info">

          <span className="percent">
            {stock.percent}
          </span>

          <span className="price">
            {stock.price}
          </span>

        </div>

      </div>


      {/* =========================================
          ACTIONS
      ========================================= */}

      <WatchListActions uid={stock.name} />

    </li>
  );
};


// =====================================================
// WATCHLIST ACTIONS
// =====================================================

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);


  const handleBuyClick = () => {

    generalContext.openBuyWindow(uid);

  };


  const handleSellClick = () => {

    generalContext.openSellWindow(uid);

  };


  return (
    <span className="actions">

      {/* BUY */}

      <Tooltip
        title="Buy"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >

        <button
          className="buy"
          onClick={handleBuyClick}
        >
          Buy
        </button>

      </Tooltip>


      {/* SELL */}

      <Tooltip
        title="Sell"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >

        <button
          className="sell"
          onClick={handleSellClick}
        >
          Sell
        </button>

      </Tooltip>


      {/* CHART */}

      <Tooltip
        title="Chart"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >

        <button className="action-button">

          <BarChartOutlined />

        </button>

      </Tooltip>


      {/* MORE */}

      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >

        <button className="action-button">

          <MoreHoriz />

        </button>

      </Tooltip>

    </span>
  );
};


export default WatchList;