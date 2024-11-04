import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "./BarChart.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
    const data = {
        labels: ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5"],
        datasets: [
            {
                label: "Média de erros",
                data: [3, 5, 6, 4, 2],
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
        plugins: {
            legend: { display: false }, // Esconde a legenda
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw}`, // Exibe apenas o valor sem o rótulo
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false, // Esconde os valores no eixo Y
                    stepSize: 1,
                },
                grid: {
                    display: false, // Remove a grade no eixo Y
                },
                border: {
                    display: false, // Remove o traço da borda do eixo Y
                },
            },
            x: {
                grid: {
                    display: false, // Remove a grade no eixo X
                },
                ticks: {
                    font: {
                        size: 14, // Ajuste o tamanho da fonte das labels no eixo X, se necessário
                    },
                },
                border: {
                    display: false, // Remove o traço da borda do eixo X
                },
            },
        },
    };



    return (
        <div className="bar-chart">
            <h2 style={{ textAlign: "center" }}>Média de erros por fase</h2>
            <Bar data={data} options={options} className="chart" />
        </div>
    );
}

export default BarChart;