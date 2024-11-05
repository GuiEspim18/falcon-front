import "./NavIconButton.scss";

function NavIconButton(props) {

    function click() {
        if (props.onClick != null) {
            props.onClick();
        }
    }

    return (
        <button className="icon-button" onClick={click}>
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default NavIconButton