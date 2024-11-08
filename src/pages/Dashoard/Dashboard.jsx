import BarChart from "../../utils/components/Charts/BarChart/BarChart";
import LineChart from "../../utils/components/Charts/LineChart/LineChart";
import DoughnutChart from "../../utils/components/Charts/DoughnutChart/DoughnutChart";
import "./Dashboard.scss";
import Ranking from "../../utils/components/Ranking/Ranking";
import Table from "../../utils/components/Table/Table";

function Dashboard() {
    const tableData = [
        { id: 1, rm: "98297", name: "João", email: "joao.zamperlini@usp.com" },
        { id: 2, rm: "91267", name: "Lucas", email: "lucas.speranzini@usp.com" },
        { id: 3, rm: "55218", name: "Vinicius", email: "Vinicius.zamperlini@usp.com" }
    ];

    return (
        <div className="dashboard">
            <h1>Bem vindo(a), Fábio!</h1>
            <div className="charts">
                <div className="bar-chart-holder">
                    <BarChart title="Média de erros por fase" />
                </div>
                <div className="double-chart-holder">
                    <div className="line-chart-holder-1">
                        <LineChart title="Evolução dos residentes no ano" />
                    </div>
                    <div className="ranking-card-holder">
                        <Ranking />
                    </div>
                    {/* <div className="line-chart-holder-2">
                        <LineChart />
                    </div> */}
                </div>
                <div className="loader-indicator-holder">
                    <div className="doughnut-chart-holder-1">
                        <DoughnutChart percentage={80} title="Melhoraram seu desempenho"  />
                    </div>
                    <div className="doughnut-chart-holder-2">
                        <DoughnutChart percentage={23} title="Concluiram o módulo 1 sem erros" />
                    </div>
                </div>
            </div>
            <div className="table-holder">
                <Table headers={["ID", "RM", "Nome", "Email"]} values={tableData} />
            </div>
        </div>
    );
}

export default Dashboard;