import "./Ranking.scss";

function Ranking() {
    return (
        <div className="ranking-card">
            <h1>Ranking - 2024</h1>
            <ul>
                <li>
                    <div className="item">
                        <img src="/src/images/users/lucas.png" alt="" />
                        <div>
                            <h3>Lucas</h3>
                            <p>400.000</p>
                        </div>
                        <div>
                            <h3>Tempo Jogado</h3>
                            <p>80 horas</p>
                        </div>
                        <div>
                            <h3>Precisão</h3>
                            <p>92%</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/src/images/users/guilherme.png" alt="" />
                        <div>
                            <h3>Guilherme</h3>
                            <p>380.000</p>
                        </div>
                        <div>
                            <h3>Tempo Jogado</h3>
                            <p>74 horas</p>
                        </div>
                        <div>
                            <h3>Precisão</h3>
                            <p>88%</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Ranking;