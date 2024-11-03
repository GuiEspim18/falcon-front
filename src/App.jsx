import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import BarChart from "./utils/components/Charts/BarChart/BarChart";

function App() {
  return (
    <section className="content">
        <SideMenu />
        <section className="page-content">
          <TitleHeader title="Dashboard" />
          <BarChart />
        </section>
    </section>
  );
}

export default App;
