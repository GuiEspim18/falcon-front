import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import Dashboard from "./pages/Dashoard/Dashboard";

function App() {
  return (
    <section className="content">
        <SideMenu />
        <section className="page-content">
          <TitleHeader title="Dashboard" />
          <Dashboard /> 
          {/* <LineChart /> */}
          {/* <DoughnutChart percentage={80} /> */}
        </section>
    </section>
  );
}

export default App;
