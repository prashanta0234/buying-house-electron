import React, { useEffect, useState } from "react";
// import Navbar from "../../../shared/Navbar/Navbar";
import log from "../../images/logo/black.png";
import { useRef } from "react";

// import PostRequest from "../../../request//Post";
import axios from "axios";
import swal from "sweetalert";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import PostRequest from "../../request/Post";
import Navbar from "../../shared/Navbar/Navbar";

const AddOrder = () => {
  const [product, setProduct] = useState([]);
  const [selectP, setSelectP] = useState("");
  const [selectPrice, setSelectPrice] = useState(0);
  const [selectquantity, setSelectquantiry] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dates, setDate] = useState(new Date());

  let buyerName = useRef(null);
  let buyerPhone = useRef(null);
  let productName = useRef(null);
  let mail = useRef(null);
  let pQuentity = useRef(null);
  let addr = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/product`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const filteredItems = product.filter((item) => {
    if (selectP !== "") {
      return (
        item.product_name &&
        item.product_name.toLowerCase() === selectP.toLowerCase()
      );
    } else {
      return true;
    }
  });

  const handleItem = (e) => {
    setSelectPrice(0);
    e.preventDefault();
    let p_name = productName.current.value;
    setSelectP(p_name);
    setSelectPrice(parseInt(filteredItems[0].product_price));
  };

  const handleselectQuantity = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      setSelectquantiry(parseInt(e.target.value));
    } else {
      setSelectquantiry(0);
    }
  };

  const calculateTotal = () => {
    let total = selectPrice * selectquantity;
    setTotalPrice(total);
  };

  const submitHendaler = async (e) => {
    e.preventDefault();
    let dat = new Date();
    let date = await dat.toDateString();

    let name = buyerName.current.value;
    let phone = buyerPhone.current.value;
    let p_name = productName.current.value;
    let email = mail.current.value;
    let p_quentity = parseInt(pQuentity.current.value);
    let address = addr.current.value;
    console.log(p_name.value);

    if (totalPrice > 0) {
      const request = new PostRequest("order", {
        name,
        phone,
        p_name,
        email,
        p_quentity,
        date,
        address,
        total: totalPrice,
        d_date: dates,
      });
      // const requesta = new PostRequest("Totalsale", {
      //   total: totalPrice,
      // });

      setSelectP("");
      setSelectPrice(0);
      setSelectquantiry(1);
      setTotalPrice(0);
      buyerName.current.value = "";
      buyerPhone.current.value = "";
      productName.current.value = "";
      mail.current.value = "";
      pQuentity.current.value = "";
      addr.current.value = "";
    } else {
      swal({
        title: "Sorry!",
        text: "Calculate Total price!",
        icon: "warning",

        dangerMode: true,
      });
    }
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
                  <select
                    className="rounded-md px-2"
                    id="states"
                    ref={productName}
                    onClick={handleItem}
                  >
                    {product.map((item) => (
                      <option key={item.id} value={item.product_name}>
                        {item.product_name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    ref={mail}
                    required
                  />
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="quantity"
                    placeholder="Product Quantity"
                    ref={pQuentity}
                    onChange={(e) => handleselectQuantity(e)}
                    required
                  />
                  <DatePicker
                    selected={dates}
                    className="py-4 w-full rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    onChange={(date) => setDate(date)}
                    dateFormat="yyyy/MM/dd"
                  />
                </div>

                {/* <input
                  className="py-4 w-full my-6 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                  type="text"
                  name="quantity"
                  placeholder="Product Quantity"
                  ref={pQuentity}
                  onChange={(e) => handleselectQuantity(e)}
                  required
                /> */}
                <textarea
                  className="py-4 w-full rounded-md mt-[30px] px-4 placeholder:text-md focus:text-md outline-none"
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
                <span>{selectP}</span>
              </p>
              <p>
                <b>Product Quantity :</b> <span>{selectquantity}</span>
              </p>
              <p>
                <b>Product Price per/pis : </b> <span>{selectPrice}</span>
              </p>
              <hr className="mt-4" />
              <div className="flex justify-between items-center my-4">
                <p className="font-bold text-[18px]">Total Price: </p>
                <span className="font-bold text-[18px]"> TK: {totalPrice}</span>
              </div>
              <button
                onClick={calculateTotal}
                className="btn btn-active relative z-[5] border-white border-2 font-bold text-2xl capitalize  w-full mt-8 bg-transparent hover:text-black before:bg-yellow-500  text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] hover:before:w-full hover:before:left-[unset] hover:before:right-0 before:transition-all duration-400 before:rounded-md ease-linear"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
