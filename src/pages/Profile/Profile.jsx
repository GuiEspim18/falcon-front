import { useParams } from "react-router-dom";
import "./Profile.scss";
import { useEffect, useState } from "react";
import IconTextButton from "../../utils/components/Buttons/IconTextButton/IconTextButton";

function Profile() {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    const tableData = [
        { id: 1, rm: "98297", name: "João Paulo", email: "joao.zamperlini@usp.com", photo: "/src/images/users/joao.png", surname: "Fonseca Zamperlini" },
        { id: 2, rm: "91267", name: "Lucas", email: "lucas.speranzini@usp.com", photo: "/src/images/users/lucas.png", surname: "Speranzini" },
        { id: 3, rm: "55218", name: "Vinicius", email: "Vinicius.zamperlini@usp.com", surname: "Barros", photo: "/src/images/users/vinicius.jpg"  },
        { id: 4, rm: "99499", name: "Guilherme", email: "guilherme.espim@usp.com", photo: "/src/images/users/guilherme.png", surname: "Monteiro Espim" },
        { id: 5, rm: "12345", name: "Pedro", email: "pedro.barros@usp.com", surname: "Fernandes Lô de Barros", photo: "/src/images/users/pedro.jpg" },
    ];

    useEffect(function () {
        setStudent(tableData.filter(function (s) { return s.id == id; })[0]);
    }, [id]);

    return (
        <div className="profile">
            <div className="line">
                <div className="info">
                    <div className="user-data">   
                        <div className="photo" style={{ backgroundImage: `url(${student.photo})`}}>

                        </div>
                        <div className="name">
                            <h1>{student.name}</h1>
                            <h1>{student.surname}</h1>
                            <p>Medicina - 1 RM {student.rm}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <IconTextButton className="btn" icon="bar_chart" text="Desempenho" />
                        <IconTextButton className="btn" icon="school" text="Conquistas" />
                        <IconTextButton className="btn" icon="share" text="Compartilhar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;