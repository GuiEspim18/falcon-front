import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./BarChart.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

function BarChart(props) {
    const data = {
        labels: ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5"],
        datasets: [
            {
                label: "Média de erros",
                data: [3, 5, 10, 8, 2],
                backgroundColor: [
                    "#6F9EDA",
                    "#3B6FB4",
                    "#185EBA",
                    "#557FB5",
                    "#5C99E8",
                ],
                borderRadius: 15, // Arredonda as bordas das colunas
                barPercentage: 0.5, // Controla a largura das barras (0.1 a 1)
                categoryPercentage: 0.6, // Ajusta o espaçamento entre as barras
                borderSkipped: false, // Remove o corte na borda superior
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Permite que o gráfico ocupe todo o espaço disponível
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw}`,
                },
            },
            datalabels: {
                clip: false,
                anchor: "end", // Posição do rótulo
                align: "top",  // Alinhamento do rótulo
                formatter: (value) => value, // Formatação do rótulo
                font: {
                    size: 19,
                    weight: "bold"
                },
                color: "#0548A0", // Cor do rótulo
            }
        },
        scales: {
            y: {
                max: 11,
                beginAtZero: true,
                ticks: {
                    display: false,
                    stepSize: 1,
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                },
                border: {
                    display: false,
                },
            },
        },
    };



    return (
        <div className="bar-chart">
            <h2>{props.title}</h2>
            <div className="chart">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default BarChart;