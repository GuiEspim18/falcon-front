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
                data: [180, 185, 175, 190, 200, 210, 195, 210, 211, 212, 205, 220 ],
                borderColor: "#0548A0", // Cor da linha
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Área sombreada abaixo da linha
                tension: 0, // Curvatura da linha (0.3 deixa ela levemente curva)
                fill: true,   // Preenche a área abaixo da linha
                pointRadius: 0, // Remove os pontos na linha para um estilo mais limpo
                borderWidth: 4, // Espessura da linha
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false }, // Oculta a legenda
            title: {
                display: true,
                text: "Variação do Preço da Ação",
                font: { size: 18 },
                color: "#333333",
            },
        },
        scales: {
            x: {
                grid: { display: false }, // Remove as linhas da grade do eixo X
                ticks: { color: "#555555" }, // Cor das labels do eixo X
            },
            y: {
                grid: {
                    display: false, // Remove a grade no eixo X
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false, // Remove o traço da borda do eixo X
                },
            },
        },
    };

    return (
        <div className="bar-chart">
            <h2 style={{ textAlign: "center" }}>Evolução dos residentes no ano</h2>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;