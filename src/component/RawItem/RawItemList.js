import axios from "axios";
import React, { useEffect, useState } from "react";
// import Navbar from "../shared/Navbar/Navbar.jsx";

import DataTable from "react-data-table-component";
import Navbar from "../../shared/Navbar/Navbar";

export default function RawItemList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const fetchData = async () => {
    try {
      await axios("http://localhost:9000/rowitem").then(function (response) {
        setData(response.data);
      });
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "Item Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Companey Name",
      selector: (row) => row.company_name,
    },
    {
      name: "Companey Email",
      selector: (row) => row.company_email,
    },
    {
      name: "Product Quantity (KG)",
      selector: (row) => row.quantity,
    },

    {
      name: "Buying date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const filteredItems = data.filter((item) => {
    console.log(item);
    if (search !== "") {
      console.log(item.product_name);
      return (
        item.product_name &&
        item.product_name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return true;
    }
  });

  return (
    <>
      <Navbar />

      <div className="ml-5 mr-5">
        <DataTable
          title="Rowitem List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={
            <input
              type="text"
              id="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Item Name"
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
