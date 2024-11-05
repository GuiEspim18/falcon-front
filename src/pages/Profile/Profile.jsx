import { useParams } from "react-router-dom";
import "./Profile.scss";
import { useEffect, useState } from "react";
import IconTextButton from "../../utils/components/Buttons/IconTextButton/IconTextButton";
import DoughnutChart from "../../utils/components/Charts/DoughnutChart/DoughnutChart";
import LineChart from "../../utils/components/Charts/LineChart/LineChart";
import BarChart from "../../utils/components/Charts/BarChart/BarChart";
import Ranking from "../../utils/components/Ranking/Ranking";

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

                <div className="indicators">
                    <div className="column">
                        <div>
                            <div className="topic">
                                <img src="/src/images/icons/deployed_code.png" alt="" />
                                <h4>Pontuação</h4>
                            </div>
                            <p className="value">500.000</p>
                        </div>
                        <div>
                            <div className="topic">
                                <img src="/src/images/icons/victory.png" alt="" />
                                <h4>Colocação</h4>
                            </div>
                            <p className="value">12</p>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <div className="topic">
                                <img src="/src/images/icons/book.png" alt="" />
                                <h4>Módulos Concluídos</h4>
                            </div>
                            <p className="value">12</p>
                        </div>
                        <div>
                            <div className="topic">
                                <img src="/src/images/icons/alarm_on.png" alt="" />
                                <h4>Tempo de Estudo</h4>
                            </div>
                            <p className="value">120 horas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="charts">
                <div className="bar-chart-holder">
                    <BarChart title="Média de erros por fase" />
                </div>
                <div className="double-chart-holder">
                    <div className="line-chart-holder-1">
                        <LineChart title="Evolução no ano" />
                    </div>
                    <div className="ranking-card-holder">
                        <BarChart title="Média de objetos retirados por fase" />
                    </div>
                </div>
                <div className="loader-indicator-holder">
                    <div className="doughnut-chart-holder-1">
                        <DoughnutChart percentage={80} title="Desempenho"  />
                    </div>
                    <div className="doughnut-chart-holder-2">
                        <DoughnutChart percentage={23} title="Concluiu os módulos sem erros" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;