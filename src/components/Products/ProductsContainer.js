import styled from "styled-components";


const ProductsContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3.5em 1.5em 3.5em;

  background-color: #242424;
  
  border-radius: 1em;
  border-top: 2px solid var(--brown-secondary);
  border-bottom: 2px solid var(--brown-secondary);

  .products-inner {
    display: flex;
    flex-direction: column;

    width: 95%;
    max-width: 1080px;
    margin: 0 auto;

    @media (min-width: 45em) {
      padding: 0 1.25em;
    }

    .products-title {
      text-align: center;
      margin-bottom: 1em;
    }

    .slick-dots {
      li {
        margin: 0;
      }
    }

    .slick-prev {
      transform: scale(1.75);
    }
    .slick-next {
      transform: scale(1.75);
    }
    .slick-dots li button:before {
      color: var(--brown-primary);
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
    border-top-left-radius: 0.7em;
    border-top-right-radius: 0.7em;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em;
    height: 100%;
    position: relative;

    box-shadow: 0 1px 2px 0px var(--brown-secondary);
    background-color: var(--black-primary);
    
    transition: all 0.3s ease-out;
    z-index: 10;

    &:hover {
      transform: scale(1.02);
      transform: translateY(-0.25em);
      box-shadow: 0 1px 5px 0 var(--brown-secondary);
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

      border-top-left-radius: 0.7em;
      border-top-right-radius: 0.7em;
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
        font-weight: lighter;
        line-height: 1.1;
        color: var(--white-secondary);
      }
    }
  }
`;

export default ProductsContainer;