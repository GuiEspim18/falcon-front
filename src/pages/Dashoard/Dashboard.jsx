import BarChart from "../../utils/components/Charts/BarChart/BarChart";
import LineChart from "../../utils/components/Charts/LineChart/LineChart";
import DoughnutChart from "../../utils/components/Charts/DoughnutChart/DoughnutChart";
import "./Dashboard.scss";

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Bem vindo(a), Fábio!</h1>
            <div className="charts">
                <div className="bar-chart-holder">
                    <BarChart />
                </div>
                <div className="double-chart-holder">
                    <div className="line-chart-holder">
                        <LineChart />
                    </div>
                    <div className="line-chart-holder">
                        <LineChart />
                    </div>
                </div>
                <div className="double-chart-holder loader-indicator">
                    <div className="doughnut-chart-holder">
                        <DoughnutChart percentage={80} />
                    </div>
                    <div className="doughnut-chart-holder">
                        <DoughnutChart percentage={80} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;