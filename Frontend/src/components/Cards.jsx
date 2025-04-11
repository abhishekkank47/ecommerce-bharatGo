import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context api/authContext";
import { useCart } from "../context api/CartContext";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";

const Cards = ({ title, price, details, category, img, product }) => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart([]);

  return (
    <>
      <div className="card bg-transparent w-96  md:m-8 hover:scale-105">
        <figure className="relative">
          <img className="h-[400px] w-[400px] rounded-xl" src={img} alt={title} />
          <div className="absolute left-3 bottom-3  p-2 px-4 rounded-full bg-slate-200/55 text-black font-thin text-xs">
            {category}
          </div>
          <div className="absolute right-3 top-3 font-bold cursor-pointer">
              <Link
                className="bg-black text-5xl text-white hover:bg-blue-500 hover:text-black"
                title="Add To Cart"
                to={!auth.user ? "/login" : ""}
                onClick={() => {
                  setCart([...cart, product]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, product])
                  );
                  if (auth.user) {
                    toast.success("Added to Cart succesfully !");
                  } else {
                    toast.success("Added to Cart, Please Login to check");
                  }
                }}
              >
                 <IoIosAddCircle />
              </Link>
            </div>
        </figure>
        <div className="flex justify-between items-center pb-5">
          <p className="card-title text-xs md:text-sm font-thin text-slate-700  m-2">
            {title}
          </p>
          <div className=" text-black font-bold text-lg mx-3">{`${price}$`}</div>
        </div>

      </div>
    </>
  );
};

export default Cards;
