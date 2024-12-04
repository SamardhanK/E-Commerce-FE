import React, { useState } from "react";
import ProductCards from "./ProductCards";

import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProdutcs, setVisibleProducts] = useState(8);
  const loadMoreProducta = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products </h2>
      <p className="section__subheader mb-12 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet
        est cumque, fugit culpa veritatis maiores repellat expedita molestiae
        autem?
      </p>

      <div className="mt-12">
        <ProductCards products={products.slice(0,visibleProdutcs)} />
      </div>

      <div className="product__btn">
        {
            visibleProdutcs < products.length && (
                <button className="btn" onClick={loadMoreProducta}> Load More</button>
            )
        }
      </div>
    </section>
  );
};

export default TrendingProducts;
