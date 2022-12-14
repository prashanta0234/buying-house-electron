import axios from "axios";
import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import Navbar from "../../shared/Navbar/Navbar";

export default function EmptList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const fetchData = async () => {
    try {
      await axios("http://localhost:9000/employee").then(function (response) {
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
      name: "Employee Name",
      selector: (row) => row.Employee_name,
      sortable: true,
    },
    {
      name: "Employee Sellary",
      selector: (row) => row.Employee_Sellary,
    },

    {
      name: "Employee Phone",
      selector: (row) => row.Number,
    },
    {
      name: "Employee Address",
      selector: (row) => row.Employee_Address,
    },

    {
      name: "Employee Joining Data",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const filteredItems = data.filter((item) => {
    console.log(item);
    if (search !== "") {
      console.log(item.number);
      return item.Number && item.Number.includes(search);
    } else {
      return true;
    }
  });

  return (
    <>
      <Navbar />

      <div className="ml-5 mr-5">
        <DataTable
          title="Employee List"
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
