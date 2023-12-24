import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function TempHumChart({ data }: { data?: any }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  );

  const temp = [17.1, 16.8, 16.4, 16.2, 16.2, 16.4, 16.5];
  const hum = [46.8, 45.9, 45.2, 46, 46.8, 46.8, 47.7];

  const options: any = {
    innerHeight: 200,
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    // tooltips: {
    //   callbacks: {
    //     label: function (tooltipItem: any) {
    //       console.log("tooltipItemtooltipItem", tooltipItem);
    //       return tooltipItem.yLabel
    //         .toFixed(2)
    //         .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    //     },
    //   },
    // },
    plugins: {
      // tooltip: {
      //   callbacks: {
      //     label: function (context: any) {
      //       let label = context.dataset.label || "";

      //       if (label) {
      //         label += ": ";
      //       }
      //       if (context.parsed.y !== null) {
      //         label += "$" + context.parsed.y.toString().split(".")[0];
      //         // .format(context.parsed.y)
      //         // .split('.')[0]
      //       }
      //       return label;
      //     },
      //   },
      // },
      legend: {
        display: false, // Hide the legend
      },

      title: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          display: false,
        },
        // max: 100000,
        ticks: {
          beginAtZero: true,
          callback: function (value: number, index: number) {
            return index % 2 === 0 ? value + `` : "";
          },
        },
      },
      y2: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          display: false,
        },
        // max: 100000,
        ticks: {
          beginAtZero: true,
          callback: function (value: number, index: number) {
            return index % 2 === 0 ? value + `` : "";
          },
        },
      },
    },
  };
  const labels =
    temp &&
    temp?.map((_v: any, i: any) => {
      const date = new Date(2023, 11, 16+i);
      const dateM = moment(date.toISOString())
      // date.setDate(date.getDate());
      return `${dateM.format('MMM DD')}`;
    });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temp",
        data: temp,
        // data: data?.map((d: any) => {
        //   return d[1];
        // }),
        borderColor: "#0088F5",
        backgroundColor: "#0088F5",
        yAxisID: "y",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Hum",
        data: hum,
        borderColor: "#CB220D",
        backgroundColor: "#CB220D",
        yAxisID: "y2",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <div className="max-h-60">
        {chartData && (
          <Line
            className="mx-2 mb-10 w-20 h-20"
            options={options}
            data={chartData || []}
          />
        )}
      </div>
    </>
  );
}
