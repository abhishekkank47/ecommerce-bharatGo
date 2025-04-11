import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context api/CartContext";
import { useAuth } from "../../../context api/authContext";

const Cart = () => {
  const [auth, setAuth] = useAuth("");
  const [cart, setCart] = useCart([]);

  //REMOVE CART ITEM
  const removeCart = (id) => {
    try {
      let myCart = [...cart]
      let index = myCart.findIndex(i=>i._id===id)
      myCart.splice(index, 1)
      setCart(myCart)
      localStorage.setItem('cart',JSON.stringify(myCart))
    } catch (error) {
      console.log(`FAILED TO REMOVE CART: ${error}`);
    }
  };

  //TOTAL PRICE CART ITEM
  const subTotalPrice = ()=>{
    try {
      let subtotal = 0
      cart?.map((i)=> subtotal += i.price)
      return subtotal.toLocaleString('en-US', {
        style:"currency", currency:"USD"
      })
    } catch (error) {
      console.log(`FAILED TO TOTAL CART PRICE : ${error}`);
    }
  }
  return (
    <>
      <section className="py-24 relative bg-slate-200 h-full">
        {cart.length === 0 ? (
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto py-48">
            <h2 className="title font-manrope font-bold text-3xl md:text-4xl leading-10 mb-8 text-center text-blue-600">
              {auth?.token
                ? `Welcome ${auth.user.fullName}, Happy To See You Here !`
                : "Shopping Cart"}
            </h2>
            <p className="font-normal text-center leading-7 text-gray-500  mb-6">
              Your Cart Wishlist is Empty For right now, Please Visit Products Page
              to Continue Shopping
            </p>
            <center>
              <button
                className="flex items-center rounded-md bg-blue-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-blue-500 focus:shadow-none active:bg-pink-500 hover:bg-blue-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 mr-1.5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <Link to={"/products"}>
                  Go Shopping
                </Link>
              </button>
            </center>
          </div>
        ) : (
          <>
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-3xl leading-10 mb-3 text-center text-blue-600">
                  {auth?.token
                    ? `Welcome ${auth.user.fullName}, For Checkout Process`
                    : "Shopping Cart"}
                </h2>
                <p className="font-normal text-center leading-7 text-gray-500  mb-3">
                  Please Complete Checkout Process, And Enjoy your Product
                </p>
          
            {
              cart?.map((i) => (
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">
                  <div className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
                    <div className="col-span-12 lg:col-span-2 img box">
                      <img
                        src={i.images[0]}
                        alt={i.title}
                        className="max-lg:w-full lg:w-[180px] rounded-lg"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                      <div className="flex items-center justify-between w-full mb-4">
                        <h5 className="font-manrope font-bold text-2xl leading-9 text-green-500 ">
                          {i.title}
                        </h5>
                        <button
                          onClick={() => removeCart(i.id)}
                          className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                        >
                          <svg
                            width={34}
                            height={34}
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                              cx={17}
                              cy={17}
                              r={17}
                              fill
                            />
                            <path
                              className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                              d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                              stroke="#EF4444"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="font-normal text-base leading-7 text-gray-500  mb-6">
                        {i.description}{" "}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              width={18}
                              height={19}
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.5 9.5H13.5"
                                stroke
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="number"
                            className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                            placeholder={1}
                          />
                          <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              width={18}
                              height={19}
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.75 9.5H14.25M9 14.75V4.25"
                                stroke
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <h6 className="text-green-500 font-manrope font-bold text-2xl leading-9 text-right">
                          {`${i.price} $`}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            <div>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                  <h5 className="text-blue-500 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
                    Subtotal
                  </h5>
                  <div className="flex items-center justify-between gap-5 ">
                    <h6 className="font-manrope font-bold text-2xl lead-9 text-blue-500">
                    {subTotalPrice()}
                    </h6>
                  </div>
                </div>
                <div className="max-lg:max-w-lg max-lg:mx-auto">
                  <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
                    Shipping taxes, and discounts calculated at checkout
                  </p>
                  <button className="rounded-full py-4 px-6 bg-green-500 text-black font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-blue-500 ">
                    <Link to="/dashboard/adopt-checkout">Checkout</Link>
                  </button>
                </div>
            </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;
