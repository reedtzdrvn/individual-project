import React, { useState } from "react";

import s from "./AddNewColumn.module.css";

import vector from "../../assets/img/vector.svg";
import cross from "../../assets/img/cross.svg";

const AddNewColumn = ({ addTitle }) => {
    const [add, setAdd] = useState(false);
    const [columnName, setColumnName] = useState("");

    const confirmColumn = () => {
        addTitle(columnName);
        setAdd(false);
        setColumnName("");
    };

    return (
        <div className="tasks">
            {!add ? (
                <div onClick={() => setAdd(true)} className="buttonHandle">
                    <img src={vector} alt="add" />
                    <button>Добавить еще одну колонку</button>
                </div>
            ) : (
                <div className="textareaHandle">
                    <textarea
                        autoFocus
                        placeholder="Введите название колонки"
                        rows="3"
                        value={columnName}
                        onChange={(e) => setColumnName(e.target.value)}
                        className={"text " + s.text}
                    ></textarea>
                    <div className="flexContainer">
                        <button onClick={confirmColumn}>
                            Добавить колонку
                        </button>
                        <img
                            onClick={() => setAdd(false)}
                            src={cross}
                            alt="cross"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddNewColumn;
