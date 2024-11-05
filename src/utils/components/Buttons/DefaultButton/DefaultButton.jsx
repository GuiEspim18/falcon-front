import "./DefaultButton.scss";

function DefaultButton(props) {

    function close() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button className={"default-button " + props.className} onClick={close}>{props.text}</button>
    );
}

export default DefaultButton;