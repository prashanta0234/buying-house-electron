import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar.jsx";

import DataTable from "react-data-table-component";

export default function BuyerList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dates, setDate] = useState("");
  const [status, setStatus] = useState(null);
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const fetchData = async () => {
    try {
      await axios("http://localhost:9000/order").then(function (response) {
        setData(response.data);
      });
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchData();
    let dat = new Date();
    let date = dat.toISOString().slice(0, 10);
    setDate(date);
  }, [status]);
  console.log(dates);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "product name",
      selector: (row) => row.p_name,
    },
    {
      name: "product Quentity",
      selector: (row) => row.p_quentity,
    },
    {
      name: "Order date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Delivery date",
      selector: (row) => row.d_date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        const handaler = async (id) => {
          console.log(id);
          const res = await axios.patch(`http://localhost:9000/order/${id}`, {
            status: true,
          });
          setStatus(res);
        };

        if (dates > row.d_date && row.status === false) {
          return <p class="text-red-600 font-bold">Time Out</p>;
        } else if (row.status === true) {
          return <p class="text-green-600 font-bold">Deliverd</p>;
        } else {
          const a = new Date(dates);
          const b = new Date(row.d_date);
          const diffTime = Math.abs(a - b);
          const days =
            Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + " days left";

          return (
            <div class="flex space-x-2">
              <p class="text-blue-600 font-bold">{days}</p>{" "}
              <button class="bg-green-300 p-1" onClick={() => handaler(row.id)}>
                Deliverd
              </button>
            </div>
          );
        }
      },
      sortable: true,
    },
  ];

  const filteredItems = data.filter((item) => {
    console.log(item);
    if (search !== "") {
      console.log(item.number);
      return item.phone && item.phone.includes(search);
    } else {
      return true;
    }
  });

  return (
    <>
      <Navbar />

      <div className="ml-5 mr-5">
        <DataTable
          title="Buyer List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={
            <input
              type="number"
              id="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          persistTableHead
        />
      </div>
    </>
  );
}
