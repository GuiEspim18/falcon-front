import "./IconButton.scss";

function IconButton(props) {

    function click(event) {
        if (props.onClick) {
            if (props.getEvent) {
                props.onClick(event);
            } else {
                props.onClick();
            }
        }
    }

    return (
        <button className="icon-button" onClick={click}>
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
        </button>
    );
}

export default IconButton;