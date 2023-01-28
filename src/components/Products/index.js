import * as React from "react";

import Slider from "react-slick";
import ProductsContainer from "./ProductsContainer";

import honeyItems from "./honeyItems";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

const Products = () => {
  return (
    <ProductsContainer id="products">
      <div className="products-inner">
        <h2 className="products-title">Our Products</h2>
        <Slider {...settings}>
          {honeyItems.map((item, i) => {
            return (
              <div className="product-card" key={`product-${i}`}>
                <div
                  className="product-card__icon"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="product-card__info">
                  <h4>{item.name}</h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </ProductsContainer>
  );
};


export default Products;
