import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([""]);
  const [backendLoad, setBackendLoad] = useState(true);

  const fetchProductDatabse = async () => {
    try {
      setBackendLoad(true);
      const product = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );

      if (product?.data) {
        setProducts(product.data);
        setBackendLoad(false);
      }
      
    } catch (error) {
      console.log(`ERROR WHILE FETCHING PRODUCT FROM DATABASE : ${error}`);
    }
  };

  useEffect(() => {
    fetchProductDatabse();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9 flex flex-wrap bg-slate-200">
        <center>
          <div className="mt-20">
            <h1 className="text-4xl font-semibold text-blue-500">
              WE ARE <span className="text-blue-900">DELIGHTED</span> TO HAVE
              YOU HERE
            </h1>
            <p className="text-xl pt-5 pb-5 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates itaque alias ratione deserunt. Velit blanditiis numquam
              nemo veniam, quo dignissimos, alias nam hic libero excepturi
              consectetur et quibusdam accusantium exercitationem.
            </p>
          </div>
        </center>
        {backendLoad ? (
          <>
            <div className="p-10 pt-16 w-full">
              
              <div className="loader"></div>
              
              <h1 className="text-xl font-bold text-center text-blue-500 p-3">
                Please wait, We are exicited to showcase our Products
              </h1>
            </div>
          </>
        ) : (
          <>
            {products?.map((i) => (
              <Cards
              key={i.id}
              title={i.title}
              price={i.price}
              category={i.category?.name}
              details={i.description}
              img={i.images[0]}
              product={i}
            />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
