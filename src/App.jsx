import TitleHeader from "./utils/components/Headers/TitleHeader/TitleHeader";
import SideMenu from "./utils/components/Menus/SideMenu/SideMenu";
import "./App.scss";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRouterChange } from "./hooks/UseRouteChange";

function App() {
  const [route, setRoute] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

  useEffect(function () {
    setRoute(window.location.pathname);
    setTitle(routeTitles.filter(function (r) {
      if (r.route.includes(":id")) {
        return r.route.replace(":id", id) == route;
      }
      return r.route == route;
    })[0]?.title);
  }, []);

  useRouterChange(function (location) {
    setRoute(location.pathname);
    setTitle(routeTitles.filter(function (r) {
      if (r.route.includes(":id")) {
        return r.route.replace(":id", id) == route;
      }
      return r.route == route;
    })[0]?.title);
  });

  const routeTitles = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/students", title: "Gerenciamento de Alunos" },
    { route: "/students/profile/:id", title: "Perfil" },

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
