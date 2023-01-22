import * as React from "react";

import styled from "styled-components";
import honeyItems from "./honeyItems";

import Slider from "react-slick";

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
    <ProductsContainer>
      <div className="products-inner">
        <h2 className="products-title">Our Products</h2>
        <Slider {...settings}>
          {honeyItems.map((item, i) => {
            return (
              <div className="product-card" key={`item-${i}`}>
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

const ProductsContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3.5em 1.5em 3.5em;

  .products-inner {
    width: 95%;
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    .products-title {
      text-align: center;
      margin-bottom: 1em;
    }

    .slick-prev {
      transform: scale(1.75);
    }
    .slick-next {
      transform: scale(1.75);
    }
    .slick-dots li button:before{
    color: var(--white-primary);
}

  }

  @media (min-width: 45em) {
    .products-inner {
      padding: 0 1.25em;
    }
  }


  .slick-track {
    height: 16.75em;
  }

  .slick-slide {
    padding: 0.5em;

    & > div {
      height: 100%;
    }
  }

  .product-card {
    border-radius: 0.7em;
    height: 100%;
    position: relative;
    border: 1px solid var(--white-secondary);

    transition: all 0.3s ease-out;
    z-index: 10;

    &:hover {
      transform: scale(1.02);
      transform: translateY(-0.25em);
      box-shadow: 0 1px 5px 0 #bbb;
      z-index: 100;

      .product-card__icon {
        opacity: 0.8;
      }
    }

    .product-card__icon {
      width: 100%;
      height: 12em;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.6em;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      opacity: 0.7;

    }

    .product-card__info {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5em;
      padding: 0 0.5em;

      h4 {
        text-align: center;
        line-height: 1.1;
      }
    }
  }

`;

export default Products;
