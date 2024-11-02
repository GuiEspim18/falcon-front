import "./NavIconButton.scss";

function NavIconButton(props) {

    return (
        <button className="icon-button">
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default NavIconButton