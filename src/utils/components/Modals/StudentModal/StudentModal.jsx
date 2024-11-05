import DefaultButton from "../../Buttons/DefaultButton/DefaultButton";
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
import EmailInput from "../../Inputs/EmailInput/EmailInput";
import TextInput from "../../Inputs/TextInput/TextInput";
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
                <div className="student-data">
                    <h3>{props.student.name}</h3>
                    <p>Medicina-1</p>
                </div>
                <hr />
                <div className="data">
                    <h3>Nome</h3>
                    <TextInput placeholder="Nome" value={props.student.name} className="name-input" />
                    <TextInput placeholder="Nome" value={props.student.surname} className="name-input" />
                </div>
                <hr />
                <div className="data">
                    <h3>Email</h3>
                    <EmailInput className="email" placeholder="Nome" value={props.student.email} />
                </div>
                <hr />
                <div className="buttons">
                    <IconTextButton className="delete-button" icon="delete" text="Deletar Aluno" />

                    <div className="options">
                        <DefaultButton text="Cancelar" onClick={close} />
                        <DefaultButton className="submit-button" text="Salvar Mudanças" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentModal;