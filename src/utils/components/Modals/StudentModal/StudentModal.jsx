import "./StudentModal.scss";

function StudentModal(props) {

    function close() {
        if (props.setVisible) {
            props.setVisible(false);
        }
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    return (
        <div className="overlay" onClick={close}>
            <div className="modal" onClick={stopPropagation}>
                <div className="banner">
                    <div className="photo" style={{ backgroundImage: `url(${props.student != null ? props.student.photo : ""})` }}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentModal;