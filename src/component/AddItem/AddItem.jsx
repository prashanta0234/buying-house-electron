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
        <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm">
          <p className="font-bold text-2xl text-white ">ADD NEW ORDER</p>
        </div>

        {/* input area */}
        <form onSubmit={submitHendaler}>
          <div className="lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="name"
                placeholder="Buyer Name"
                ref={buyerName}
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="phone"
                placeholder="Buyer Phone"
                ref={buyerPhone}
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="product_name"
                placeholder="Product Name"
                ref={productName}
              />
              <input
                className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                type="text"
                name="email"
                placeholder="Email Address"
                ref={mail}
              />
            </div>

            <input
              className="py-4 w-full my-6 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
              type="text"
              name="quantity"
              placeholder="Product Quantity"
              ref={pQuentity}
            />
            <textarea
              className="py-4 w-full rounded-md px-4 placeholder:text-md focus:text-md outline-none"
              name="address"
              cols="10"
              rows="5"
              placeholder="Your Address Here"
              ref={addr}
            ></textarea>
            <button
              type="submit"
              className="btn btn-active btn-secondary font-bold text-2xl capitalize  w-full mt-8"
            >
              Product Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
