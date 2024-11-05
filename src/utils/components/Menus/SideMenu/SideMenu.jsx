import NavIconButton from "../../Buttons/NavIconButton/NavIconButton";
import { useNavigate } from "react-router-dom";
import "./SideMenu.scss";

function SideMenu() {
    const navigate = useNavigate();

    return (
        <section className="side-menu">
            <div className="logo-holder"> 
                <img src="/src/images/logo.png" alt="" className="logo" />
            </div>
            <nav className="navs">
                <NavIconButton icon="dashboard" text="Dashboard" onClick={function() { navigate("/dashboard"); }} />
                <NavIconButton icon="people" text="Alunos" onClick={function() { navigate("/students"); }} />
                <NavIconButton icon="account" text="Meu Perfil" />
                <NavIconButton icon="chat" text="Mensagens" />
                <NavIconButton icon="stars" text="Rancking" />
                <hr />
                <NavIconButton icon="settings" text="Configuração" />
                <NavIconButton icon="help" text="HelpCenter" />
                <NavIconButton icon="logout" text="Sair" />
            </nav>
        </section>
    );
}

export default SideMenu;