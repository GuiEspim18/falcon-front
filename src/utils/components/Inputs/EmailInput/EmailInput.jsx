import "./EmailInput.scss";

function EmailInput(props) {
    return (
        <div className={"email-input " + props.className}>
            <img src="/src/images/icons/mail.png" alt="" />
            <input type="text" placeholder="Email" value={props.value} />
        </div>
    );
}

export default EmailInput;