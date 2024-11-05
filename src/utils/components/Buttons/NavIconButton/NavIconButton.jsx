import "./NavIconButton.scss";

function NavIconButton(props) {

    function click() {
        if (props.onClick != null) {
            props.onClick();
        }
    }

    return (
        <button className={"nav-icon-button " + (props.selected ? "selected" : "") } onClick={click}>
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default NavIconButton