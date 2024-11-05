import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="content">
        <SideMenu />
        <section className="page-content">
          <TitleHeader title="Dashboard" />
          <Outlet />
        </section>
    </section>
  );
}

export default App;
