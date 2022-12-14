import React from "react";
import log from "../../images/logo/black.png";
import PostRequest from "../../request/Post";
import Navbar from "../../shared/Navbar/Navbar";

const RawItem = () => {
  const submitHendaler = async (e) => {
    e.preventDefault();
    let dat = new Date();
    let date = await dat.toDateString();

    const form = e.target;
    const product_name = form.Item_name.value;
    const company_name = form.company_name.value;
    const company_email = form.company_email.value;
    const quantity = form.quantity.value;

    const request = new PostRequest("rowitem", {
      product_name,
      company_name,
      company_email,
      quantity,
      date,
    });

    form.Item_name.value = "";
    form.company_name.value = "";
    form.company_email.value = "";
    form.quantity.value = "";
  };
  return (
    <div>
      <>
        <Navbar></Navbar>
        <div>
          <div className="px-12 md:px-28 py-12 bg-main container mx-auto mt-12 w-full rounded-sm flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <img height="100px" width="300px" src={log} alt="" />
            </div>
            <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm w-full">
              <p className="font-bold text-2xl text-white ">ADD RAW ITEMS</p>
            </div>

            {/* input section */}
            <form className="w-[70%] min-w-[400px]" onSubmit={submitHendaler}>
              <div className="lg:px-28">
                <div className="flex flex-col ">
                  <div className="grid grid-cols-2 gap-8">
                    <input
                      className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                      type="text"
                      name="Item_name"
                      placeholder="Item Name"
                      // ref={productName}
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

                    <input
                      className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                      type="text"
                      name="company_name"
                      placeholder="company name"
                      // ref={productPrice}
                      required
                    />
                    <input
                      className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                      type="email"
                      name="company_email"
                      placeholder="company email"
                      // ref={productPrice}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-active relative z-[5] border-white border-2 font-bold text-2xl capitalize  w-full mt-8 bg-transparent hover:text-black before:bg-yellow-500  text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] hover:before:w-full hover:before:left-[unset] hover:before:right-0 before:transition-all duration-400 before:rounded-md ease-linear"
                  >
                    Add Raw Items
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default RawItem;
