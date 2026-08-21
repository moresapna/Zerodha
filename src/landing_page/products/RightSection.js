import React from "react";

function RightSection({
  productImg,
  productTitle,
  productInfo,
  productLink1,
  link1,
}) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-4 py-5 mt-5 ">
          <h4>{productTitle}</h4>

          <p className="mt-5">{productInfo}</p>

          {link1 && (
            <a href={link1}>
              {productLink1}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={productImg} alt={productTitle} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
