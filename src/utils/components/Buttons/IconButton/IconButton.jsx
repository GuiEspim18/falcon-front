import icons from "../../Icons/icons";
import "./IconButton.scss";

function IconButton(props) {

    return (
        <button className="icon-button">
            <img src={"/src/images/icons/" + props.icon + ".png"} alt="" />
            <p>{props.text}</p>
        </button>
    );
}

export default IconButton