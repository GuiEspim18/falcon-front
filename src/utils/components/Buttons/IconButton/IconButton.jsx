import "./IconButton.scss";

function IconButton(props) {

    function click() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button className="icon-button" onClick={click}>
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
        </button>
    );
}

export default IconButton;