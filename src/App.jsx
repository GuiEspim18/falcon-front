import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRouterChange } from "./hooks/UseRouteChange";

function App() {
  const [route, setRoute] = useState("");
  const [title, setTitle] = useState("");

  useEffect(function () {
    setRoute(window.location.pathname);
    setTitle(routeTitles.filter(function (r) {
      return r.route == route;
    })[0]?.title)
  }, []);

  useRouterChange(function (location) {
    setRoute(location.pathname);
    setTitle(routeTitles.filter(function (r) {
      return r.route == route;
    })[0]?.title)
  });

  const routeTitles = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/students", title: "Gerenciamento de Alunos" }
  ];

  return (
    <section className="content">
      <SideMenu />
      <section className="page-content">
        <TitleHeader title={title} />
        <Outlet />
      </section>
    </section>
  );
}

export default App;
