import "./IconTextButton.scss";

function IconTextButton(props) {

    function click() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button className={"icon-text-button " + props.className} onClick={click}>
            <img src={"/public/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default IconTextButton;