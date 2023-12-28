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
import { EditionOverview } from "@/types/editionOverview.dto";

export default function TempHumChart({ item, isFahrenheit }: { item: EditionOverview, isFahrenheit: boolean }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  );

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
            return index % 2 === 0 ? value + (isFahrenheit ? `°F` : `°C`) : "";
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
            return index % 2 === 0 ? value + `%` : "";
          },
        },
      },
    },
  };
  const labels =
    item.temp.map((_v: number, i: any) => {
      const date = new Date()
      date.setDate(date.getDate() - 7 + i)

      // const date = new Date(now.getFullYear(), now.getMonth(), now.getDay()+i);
      const dateM = moment(date.toISOString())
      // date.setDate(date.getDate());
      return `${dateM.format('MMM DD')}`;
    });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temp",
        data: item.temp.map((x) => {
          if (isFahrenheit) {
            const fahrenheit = ((x * 9 / 5) + 32)
            return fahrenheit
          } else {
            return x
          }
        }),
        // data: data?.map((d: any) => {
        //   return d[1];
        // }),
        borderColor: "#28475C",
        backgroundColor: "#28475C",
        yAxisID: "y",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Hum",
        data: item.humidity,
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
