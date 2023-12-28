import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display:false
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
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
      min: 0,
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
const current = [1, 200, 3000, 20000, 29009, 39009, 79009];
const previous = [1, 200, 3000,200, 3000, 20000, 29009, 39009];

const labels =
current &&
current?.map((_v: any, i: any) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return `${moment(_v[0]).format("MMM YY")}`;
});

export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: current,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      // label: 'Dataset 2',
      data:  previous ,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Appactivity() {
  return <Line options={options} data={data} />;
}




