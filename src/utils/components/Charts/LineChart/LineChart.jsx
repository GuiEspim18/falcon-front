import "./LineChart.scss";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
        datasets: [
            {
                label: "Evolução dos residentes no ano",
                data: [180, 185, 175, 190, 200, 210, 195, 210, 211, 212, 205, 220],
                borderColor: "#0548A0",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0,
                fill: true,
                pointRadius: 0,
                borderWidth: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico preencha o espaço disponível
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                font: { size: 18 },
                color: "#333333",
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#555555" },
            },
            y: {
                grid: { display: false },
                ticks: { display: false },
                border: { display: false },
            },
        },
    };

    return (
        <div className="line-chart ">
            <h2>Evolução dos residentes no ano</h2>
            <div className="chart">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default LineChart;
