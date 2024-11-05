import { useEffect, useState } from "react";
import "./Table.scss";
import IconButton from "../Buttons/IconButton/IconButton";

function Table(props) {
    const [values, setValues] = useState(props.values);

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

    function action(u) {
        if (props.onAction) {
            props.onAction(u);
        }
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
                            <IconButton icon="options" onClick={function() { action(value) }} />
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