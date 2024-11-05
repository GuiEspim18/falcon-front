import "./IconButton.scss";

function IconButton(props) {
    return (
        <button className="icon-button">
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
        </button>
    );
}

export default IconButton;