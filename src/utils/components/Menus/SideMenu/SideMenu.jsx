import NavIconButton from "../../Buttons/NavIconButton/NavIconButton";
import "./SideMenu.scss";

function SideMenu() {
    return (
        <section className="side-menu">
            <div className="logo-holder"> 
                <img src="/src/images/logo.png" alt="" className="logo" />
            </div>
            <nav className="navs">
                <NavIconButton icon="dashboard" text="Dashboard" />
                <NavIconButton icon="people" text="Alunos" />
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