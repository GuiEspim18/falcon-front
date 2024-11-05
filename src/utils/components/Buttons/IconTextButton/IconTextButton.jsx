import "./IconTextButton.scss";

function IconTextButton(props) {
    return (
        <button className={"icon-text-button " + props.className}>
            <img src={"/public/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default IconTextButton;