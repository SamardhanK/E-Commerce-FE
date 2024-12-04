import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredproducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );

    setFilteredproducts(filtered);
  }, [categoryName]);

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero amet
          vero praesentium, repudiandae voluptatibus nostrum ut sint eius
          ducimus nemo?
        </p>
      </section>

      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
