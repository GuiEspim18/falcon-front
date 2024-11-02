import IconButton from "../../Buttons/IconButton/IconButton";
import DashboardIcon from "../../Icons/DashboardIcon";
import "./SideMenu.scss";

function SideMenu() {
    return (
        <section className="side-menu">
            <div className="logo-holder"> 
                <img src="/src/images/logo.png" alt="" className="logo" />
            </div>
            <nav className="navs">
                <IconButton icon="dashboard" text="Dashboard" />
                <IconButton icon="people" text="Alunos" />
                <IconButton icon="account" text="Meu Perfil" />
            </nav>
        </section>
    );
}

export default SideMenu;