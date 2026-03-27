//import react from "react";
import { Line } from "react-chartjs-2";
import "../chartConfig";

const LineChart = () => {
  const data = {
    labels: ["July", "June", "May", "April", "March"],
    datasets: [
      {
        label: "expense in 10k",
        data: [12, 3, 9, 7, 5],
        tension: 0.9, //smooth curve
        backgroundColor: ["rgb(99, 250, 255)"],
        borderWidth: 5,
        borderColor: "rgb(99, 245, 255)",
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        // position: "top",
      },
    },
  };

  return (
    <div className="chart-wrapper w-750px">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
