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

    function loadValues() {
        return values.map(function (value, i) {
            return (
                <tr key={i}>
                    {Object.keys(value).map(function (key, index) {
                        return <td key={index}>{value[key]}</td>;
                    })}
                    {props.actions && 
                        <td className="actions">
                            <IconButton icon="options" />
                            {/* {props.edit && 
                                <IconButton className="action-button" rippleColor={shadow} onClick={function () { onEdit(value.id) }}>
                                    <Edit color={yellow} />
                                </IconButton>
                            }
                            {props.delete && 
                                <IconButton className="action-button" rippleColor={shadow} onClick={function () { onDelete(value.id) }}>
                                    <Delete color={red} />
                                </IconButton>
                            } */}
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