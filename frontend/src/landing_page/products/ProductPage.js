import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        productImg="/media/images/kite.png"
        productTitle="Kite"
        productInfo="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productLink1="Try demo"
        link1="#"
        productLink2="Learn more"
        link2="#"
      />
      <RightSection
        productImg="/media/images/console.png"
        productTitle="Console"
        productInfo="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productLink1="Learn more"
        link1="#"
      />
      <LeftSection
        productImg="/media/images/coin.png"
        productTitle="Coin"
        productInfo="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        productLink1="Coin "
        link1="#"
      />
      <RightSection
        productImg="/media/images/kiteconnect.png"
        productTitle="Kite Connect API"
        productInfo="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productLink1="Kite Connect"
        link1="#"
      />
      <LeftSection
        productImg="/media/images/kiteconnect.png"
        productTitle="Varsity mobile"
        productInfo="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <Universe />
    </>
  );
}

export default ProductPage;
