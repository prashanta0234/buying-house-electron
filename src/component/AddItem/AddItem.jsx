import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import log from "../../images/logo/black.png";
import { useRef } from "react";
import axios from "axios";
import swal from "sweetalert";

const AddItem = () => {
  let buyerName = useRef(null);
  let buyerPhone = useRef(null);
  let productName = useRef(null);
  let mail = useRef(null);
  let pQuentity = useRef(null);
  let addr = useRef(null);

  const submitHendaler = async (e) => {
    e.preventDefault();
    let dat = new Date();
    let date = await dat.toDateString();

    let name = buyerName.current.value;
    let phone = buyerPhone.current.value;
    let p_name = productName.current.value;
    let email = mail.current.value;
    let p_quentity = pQuentity.current.value;
    let address = addr.current.value;
    // console.log(name, bp, pn, mail, pQ, adr);

    await axios({
      method: "post",
      url: "http://localhost:9000/order",
      data: {
        name,
        phone,
        p_name,
        email,
        p_quentity,
        date,
        address,
      },
    })
      .then(function (response) {
        swal("Good job!", "Product added!", "success");
      })
      .catch(function (error) {
        console.log(error);
      });
    buyerName.current.value = "";
    buyerPhone.current.value = "";
    productName.current.value = "";
    mail.current.value = "";
    pQuentity.current.value = "";
    addr.current.value = "";
  };
  return (
    <>
      <Navbar />

      <div className="px-12 md:px-28 py-12 bg-main container mx-auto mt-12 w-full rounded-sm">
        <div className="flex justify-center">
          <img height="100px" width="300px" src={log} alt="" />
        </div>
        <div className="flex justify-center gap-12">
          <div className="w-[60%]">
            <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm">
              <p className="font-bold text-2xl text-white ">ADD NEW ORDER</p>
            </div>

            {/* input area */}
            <form onSubmit={submitHendaler}>
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="name"
                    placeholder="Buyer Name"
                    ref={buyerName}
                    required
                  />
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="phone"
                    placeholder="Buyer Phone"
                    ref={buyerPhone}
                    minlength="8"
                    required
                  />
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    ref={productName}
                    required
                  />
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    ref={mail}
                    required
                  />
                </div>

                <input
                  className="py-4 w-full my-6 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                  type="text"
                  name="quantity"
                  placeholder="Product Quantity"
                  ref={pQuentity}
                  required
                />
                <textarea
                  className="py-4 w-full rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                  name="address"
                  cols="10"
                  rows="5"
                  placeholder="Your Address Here"
                  ref={addr}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-active relative z-[5] border-white border-2 font-bold text-2xl capitalize  w-full mt-8 bg-transparent hover:text-black before:bg-yellow-500  text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] hover:before:w-full hover:before:left-[unset] hover:before:right-0 before:transition-all duration-400 before:rounded-md ease-linear"
                >
                  Add Order
                </button>
              </div>
            </form>
          </div>
          <div className="w-[40%] mt-20 ">
            <div className="bg-accent p-6 rounded-lg">
              <p>
                <b>Product name: </b>
                <span>Apple item - ( American Apple )</span>
              </p>
              <p>
                <b>Product Quantity :</b> <span>4</span>
              </p>
              <p>
                <b>Product Price per/pis : </b> <span>$34</span>
              </p>
              <hr className="mt-4" />
              <div className="flex justify-between items-center my-4">
                <p className="font-bold text-[18px]">Total Price: </p>
                <span className="font-bold text-[18px]">$390</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
