import { useEffect, useRef, useState } from "react";
import "./Table.scss";
import IconButton from "../Buttons/IconButton/IconButton";
import IconTextButton from "../Buttons/IconTextButton/IconTextButton";
import { useNavigate } from "react-router-dom";

function Table(props) {
    const [values, setValues] = useState(props.values);
    const [show, setShow] = useState(false);
    const [menuStyle, setMenuStyle] = useState({});
    const [student, setStudent] = useState({});
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(function () {
        setValues(props.values);
    }, [props.values]);

    function loadHeaders() {
        if (props.headers) {
            return props.headers.map(function (header, index) {
                return <th key={index}>{header}</th>;
            });
        } else {
            return Object.keys(values[0]).map(function (header, index) {
                return <th index={index}>{header}</th>;
            });
        }
    }

    function openProfile() {
        if (props.openProfile) {
            props.openProfile(student);
        }
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    function openMenu(event, u) {
        setStudent(u);
        const buttonRect = event.target.getBoundingClientRect();
        setMenuStyle({
            top: `${buttonRect.bottom}px`,
            left: `${buttonRect.left - 180}px`,
            width: "200px"
        });
        setShow(true);
    }

    function loadValues() {
        return values.map(function (value, i) {            
            return (
                <tr key={i}>
                    {Object.keys(value).map(function (key, index) {
                        if (index < props.headers.length) {
                            return <td key={index}>{value[key]}</td>;
                        }
                    })}
                    {props.actions &&
                        <td className="actions">
                            {show &&
                                <div className="option-menu-overlay" onClick={function () { setShow(false); }}>
                                    <div id="modal" ref={menuRef} className="options-modal" style={menuStyle} onClick={stopPropagation} onMouseLeave={function () { setShow(false); }}>
                                        <IconTextButton className="menu-item" icon="account_profile" text="Ver Estudante" onClick={function () { navigate("/students/profile/" + student.id) }} />
                                        <IconTextButton className="menu-item" icon="edit" text="Editar Estudante" onClick={function () {  openProfile(); }} />
                                        <IconTextButton className="menu-item" icon="delete-light" text="Excluir Estudante" />
                                    </div> 
                                </div>
                            }
                            <IconButton icon="options" onClick={function (e) { openMenu(e, value); }} getEvent={true} />
                        </td>
                    }
                </tr>
            );
        });
    }

    return (
        <table className="table">
            <thead>
                {loadHeaders()}
                {props.actions && <th className="actions-header"></th>}
            </thead>
            <tbody>
                {loadValues()}
            </tbody>
        </table>
    );
}

export default Table;