import "./TextInput.scss";

function TextInput(props) {
    return (
        <input className={"text-input " + props.className} placeholder={props.placeholder} value={props.value} />
    );
}

export default TextInput;