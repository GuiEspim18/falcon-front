import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
    const data = {
        labels: ['Fase 1', 'Fase 2', 'Fase 3', 'Fase 4', 'Fase 5'],
        datasets: [
          {
            label: 'Média de erros',
            data: [3, 5, 6, 4, 2],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(54, 162, 235, 0.6)',
            ],
            borderRadius: 20, // Arredonda as bordas das barras
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
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }, // Define o incremento de 1 em 1 no eixo Y
          },
        },
      };

      return (
        <div style={{ width: '500px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>Média de erros por fase</h2>
          <Bar data={data} options={options} />
        </div>
      );
}

export default BarChart;