import "./TitleHeader.scss";

function TitleHeader(props) {
    return (
        <section className="title-header">
            <h1>{props.title}</h1>
            <div className="user-data">
                <h3>Fábio dos Santos</h3>
                <p>Professor</p>
            </div>
        </section>
    );
}

export default TitleHeader;