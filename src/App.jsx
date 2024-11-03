import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";

function App() {
  return (
    <section className="content">
        <SideMenu />
        <TitleHeader title="Dashboard" />
    </section>
  );
}

export default App;
