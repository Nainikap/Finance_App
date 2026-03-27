import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
);
