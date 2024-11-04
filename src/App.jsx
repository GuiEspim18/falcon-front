import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import LineChart from "./utils/components/Charts/LineChart/LineChart";

function App() {
  return (
    <section className="content">
        <SideMenu />
        <section className="page-content">
          <TitleHeader title="Dashboard" />
          <LineChart />
        </section>
    </section>
  );
}

export default App;
