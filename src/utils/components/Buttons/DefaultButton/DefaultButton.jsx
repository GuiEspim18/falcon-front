import "./DefaultButton.scss";

function DefaultButton(props) {
    return (
        <button className={"default-button " + props.className}>{props.text}</button>
    );
}

export default DefaultButton;