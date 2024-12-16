import React from "react";
import "./app-filter.css";

const AppFilter = ({filters, onFilter}) => {

    const btnClass = condition => `btn ${condition ? "btn-light" : "btn-outline-light"}`;

    const btnData = [
        {label: "All employees", className: btnClass(filters.length === 0), mode: "default",},
        {label: "Promoted", className: btnClass(filters.includes("promoted")), mode: "promoted",},
        {label: "Salary less than 1000$", className: btnClass(filters.includes("moreThanValue")), mode: "moreThanValue",}
    ]

    const setShowMode = e => {
        onFilter(e.currentTarget.getAttribute("data-mode"));
    }

    const buttons = btnData.map(btn => {
        return (
            <button type="button" key={btn.label}
                    className={btn.className} data-mode={btn.mode} onClick={setShowMode}>
                    {btn.label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;