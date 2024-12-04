import React, { useState } from "react";
import productsData from "../../data/products.json";
import ProductCards from "../shop/ProductCards";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLocaleLowerCase();

    const filtered = productsData.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(query) ||
        product.description.toLocaleLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero amet
          vero praesentium, repudiandae voluptatibus nostrum ut sint eius
          ducimus nemo?
        </p>
      </section>
      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="text" 
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounder"
            placeholder="search for products"/>
            <button 
            onClick={handleSearch}
            className="search-button w-full md:w-auto py-2  px-8 bg-primary text-white rounded">Search</button>
        </div>


        <ProductCards products={filteredProducts}/>
      </section>
    </>
  );
};

export default Search;
