import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const labels = [
    "Week 01",
    "Week 02",
    "Week 03",
    "Week 04",
    "Week 05",
    "Week 06",
    "Week 07",
  ];
  const options = {
    responsive: true,
    tension: 0.3,
    plugins: {
      tooltip: {
        backgroundColor: "#000",
        yAlign: "bottom",
        mode: "x",
        padding: 15,
      },
      legend: {
        position: "top",
        labels: {
          font: {
            family: "IBM Plex Sans",
            size: 15,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        position: "top",
        text: "Application Stats",
        align: "start",
        font: {
          family: "IBM Plex Sans",
          size: 20,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Applications Sent",
        data: [42, 66, 28, 19, 27, 67, 53],
        borderColor: "rgb(78, 54, 226)",
        backgroundColor: "rgba(78, 54, 226, 0.5)",
      },
      {
        label: "Interviews",
        data: [36, 31, 39, 5, 54, 25, 38],
        borderColor: "rgb(26, 206, 133)",
        backgroundColor: "rgba(26, 206, 133, 0.5)",
      },
      {
        label: "Rejected",
        data: [59, 56, 45, 6, 23, 21, 43],
        borderColor: "rgb(254, 67, 78)",
        backgroundColor: "rgba(254, 67, 78, 0.5)",
      },
    ],
  };
  return (
    <Line
      options={options}
      data={data}
      style={{ maxHeight: "270px", padding: "2px 15px" }}
    />
  );
}
