import BarChart from "../../utils/components/Charts/BarChart/BarChart";
import "./Dashboard.scss";

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Bem vindo(a), Fábio!</h1>
            <div className="charts">
                <div className="bar-chart-holder">
                    <BarChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;