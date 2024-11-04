/* eslint-disable react/prop-types */
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import "./DoughnutChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {

    const data = {
        datasets: [
            {
                data: [props.percentage, 100 - props.percentage], // Progresso e restante
                backgroundColor: ["#0057B7", "#E0E0E0"], // Azul para o progresso, cinza para o fundo
                borderWidth: 0,
                cutout: "75%", // Controla a espessura do círculo
            },
        ],
    };

    const options = {
        rotation: 0, // Começa do topo
        circumference: 360, // Círculo completo
        plugins: {
            legend: { display: false }, // Remove a legenda
            tooltip: { enabled: false }, // Desabilita o tooltip
        },
        elements: {
            arc: {
                borderRadius: 0, // Arredonda as extremidades
            },
        },
    };


    return (
        <div className="doughnut-chart">
            <p>
                Melhoraram seu desempenho
            </p>
            <Doughnut data={data} options={options} className="chart" />
            <div className="label">
                {props.percentage}%
            </div>
        </div>
    );
}

export default DoughnutChart;