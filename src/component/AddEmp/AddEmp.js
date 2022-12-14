import log from "../../images/logo/black.png";
import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import PostRequest from "../../request/Post";

const AddEmp = () => {
  const submitHendaler = async (e) => {
    e.preventDefault();
    let dat = new Date();
    let date = await dat.toDateString();

    // form theke value
    const form = e.target;
    const Employee_name = form.Employee_name.value;
    const Employee_Address = form.Employee_Address.value;
    const Employee_Sellary = form.employee_Sellary.value;
    const Number = form.Number.value;

    // post request
    const request = new PostRequest("employee", {
      Employee_name,
      Employee_Address,
      Number,
      Employee_Sellary,
      date,
    });

    // form reset
    form.Employee_name.value = "";
    form.Employee_Address.value = "";
    form.Number.value = "";
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="px-12 md:px-28 py-12 bg-main container mx-auto mt-12 w-full rounded-sm flex flex-col items-center justify-center">
          {/* logo */}
          <div className="flex justify-center">
            <img height="100px" width="300px" src={log} alt="" />
          </div>
          {/* add employee */}
          <div className="bg-neutral bg-opacity-30 text-center my-6 py-4 rounded-sm w-full">
            <p className="font-bold text-2xl text-white ">ADD NEW EMPLOYEE</p>
          </div>

          {/* input section */}
          <form className="w-[70%] min-w-[400px]" onSubmit={submitHendaler}>
            <div className="lg:px-28">
              <div className="flex flex-col ">
                <div className="flex flex-col gap-8">
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="Employee_name"
                    placeholder="Employee Name"
                    required
                  />

                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="text"
                    name="Employee_Address"
                    placeholder="Employee Address"
                    required
                  />

                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="number"
                    name="Number"
                    placeholder="Employee Number"
                    required
                  />
                  <input
                    className="py-4 rounded-md px-4 placeholder:text-md focus:text-md outline-none"
                    type="number"
                    name="employee_Sellary"
                    placeholder="Employee Sellary"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-active relative z-[5] border-white border-2 font-bold text-2xl capitalize  w-full mt-8 bg-transparent hover:text-black before:bg-yellow-500  text-white before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] hover:before:w-full hover:before:left-[unset] hover:before:right-0 before:transition-all duration-400 before:rounded-md ease-linear"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmp;
