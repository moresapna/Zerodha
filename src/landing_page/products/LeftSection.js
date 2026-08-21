import React from "react";

function LeftSection({
  productImg,
  productTitle,
  productInfo,
  productLink1,
  link1,
  productLink2,
  link2,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img src={productImg} alt={productTitle} />
        </div>

        <div className="col-4 mt-5">
          <h4>{productTitle}</h4>

          <p className="mt-5 mb-3">{productInfo}</p>

          {link1 && (
            <a href={link1} style={{ marginRight: "90px" }}>
              {productLink1}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}

          {link2 && (
            <a href={link2}>
              {productLink2}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
          <diV>
            <img
              src="media/images/googlePlayBadge.svg"
              className="mt-4"
              style={{ marginRight: "10px" }}
            />
            <img src="media/images/appstoreBadge.svg" className="mt-4" />
          </diV>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
