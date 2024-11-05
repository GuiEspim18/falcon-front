import { useState } from "react";
import DefaultButton from "../../utils/components/Buttons/DefaultButton/DefaultButton";
import IconTextButton from "../../utils/components/Buttons/IconTextButton/IconTextButton";
import SearchInput from "../../utils/components/Inputs/SearchInput/SearchInput";
import StudentModal from "../../utils/components/Modals/StudentModal/StudentModal";
import Table from "../../utils/components/Table/Table";
import "./Students.scss";

function Students() {
    const tableData = [
        { id: 1, rm: "98297", name: "João", email: "joao.zamperlini@usp.com", photo: "src/images/users/joao.png" },
        { id: 2, rm: "91267", name: "Lucas", email: "lucas.speranzini@usp.com", photo: "src/images/users/lucas.png" },
        { id: 3, rm: "55218", name: "Vinicius", email: "Vinicius.zamperlini@usp.com" },
        { id: 4, rm: "99499", name: "Guilherme", email: "guilherme.espim@usp.com", photo: "src/images/users/guilherme.png" },
        { id: 5, rm: "12345", name: "Pedro", email: "pedro.barros@usp.com" },
    ];

    const [student, setStudent] = useState({})
    const [visible, setVisible] = useState(false);

    function openModal(u) {
        setStudent(u);
        setVisible(true);
    }

    return (
        <>
            {visible && <StudentModal student={student} setVisible={setVisible} />}
            <div className="students">
                <h1>Gerenciamento de Alunos</h1>
                <p>Gerencie seus alunos e permissões aqui</p>
                <div className="table-holder">
                    <div className="title-holder">
                        <div className="table-title">
                            <h3>Total de alunos</h3>
                            <h3 className="quantity">44</h3>
                        </div>
                        <div className="actions">
                            <SearchInput className="search" />
                            <DefaultButton text="Filtros" className="filters" />
                            <IconTextButton icon="add" text="Adicionar Aluno" className="add-student" />
                        </div>
                        
                    </div>
                    <Table headers={["ID", "RM", "Nome", "Email"]} values={tableData} actions={true} onAction={openModal}  />
                </div>
            </div>
        </>
    );
}

export default Students;