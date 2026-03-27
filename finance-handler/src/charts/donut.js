import react from "react";
import { Doughnut } from "react-chartjs-2";
import "../chartConfig";

const DonutChart = () => {
  const data = {
    labels: ["Spent expenses", "Saved money"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [
          "rgba(74, 0, 108, 0.8)", // spent
          "rgba(213, 187, 255, 0.8)", // savings
        ],
        borderColor: ["rgb(58, 58, 58)", "rgb(255, 255, 255)"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
