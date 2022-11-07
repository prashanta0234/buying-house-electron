import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import logo from "../../images/logo/logo.svg";

const AddProduct = () => {
  const submitHendaler = async (e) => {
    e.preventDefault();
    let dat = new Date();
    let date = await dat.toDateString();

    const form = e.target;
    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const quantity = form.quantity.value;

    console.log("results :- " + product_name, product_price, quantity);
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="px-12 md:px-28 py-12 bg-main container mx-auto mt-12 w-full rounded-sm flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <img height="100px" width="300px" src={logo} alt="" />
          </div>
          <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm w-full">
            <p className="font-bold text-2xl text-white ">ADD NEW ORDER</p>
          </div>

          {/* input section */}
          <form className="w-[70%] min-w-[400px]" onSubmit={submitHendaler}>
            <div className="lg:px-28">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-8">
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    // ref={productName}
                    required
                  />

                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="number"
                    name="product_price"
                    placeholder="Product Price"
                    // ref={productPrice}
                    required
                  />

                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="number"
                    name="quantity"
                    placeholder="Product Quantity"
                    //   ref={pQuentity}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-active btn-secondary font-bold text-2xl capitalize  w-full mt-8"
                >
                  Product Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
