import axios from "axios";
import React, { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";
import Navbar from "../shared/Navbar/Navbar";
import "./Chart.css";

export default function Charts() {
  const [data, setData] = useState([]);
  // const data = [];
  useEffect(() => {
    axios("http://localhost:9000/products").then((response) => {
      response.data.map((res) => setData((it) => [...it, res.product_price]));
    });
  }, [setData]);
  console.log(data);
  const series = [
    {
      name: "Sales",
      data,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    title: {
      text: "Selse",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 100000,
    },
  };
  return (
    <>
      <Navbar />
      <div className="chartContainer">
        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="60%"
          />
        </div>
      </div>
    </>
  );
}
