import React from "react";
import "./app-filter.css";

class AppFilter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            filters: []
        }
    }

    setShowMode = (e) => {
        const mode = e.currentTarget.getAttribute("data-mode");
        const filters = mode === "default" ? [] : [...this.state.filters];
        if ((mode === "promoted" || mode === "moreThanValue") && !filters.includes(mode)) {
            filters.push(mode)
        }
        console.log(filters);
        // {
        //     byPromotion: mode === "default" ? false : mode === "promoted" ? true : this.state.filters.byPromotion, 
        //     bySalary: mode === "default" ? false : mode === "moreThanValue" ? true : this.state.filters.bySalary,
        // }
        this.setState(() => {
          return {
            filters: filters
          }
        })
        this.props.onFilter(filters);
      }

    render(){

        // const {byPromotion, bySalary} = this.state.filters;
        const {filters} = this.state;

        const btnClass = condition => `btn ${condition ? "btn-light" : "btn-outline-light"}`;

        const btnData = [
            {label: "All employees", className: btnClass(filters.length === 0), mode: "default",},
            {label: "Promoted", className: btnClass(filters.includes("promoted")), mode: "promoted",},
            {label: "Salary less than 1000$", className: btnClass(filters.includes("moreThanValue")), mode: "moreThanValue",}
        ]

        const buttons = btnData.map(btn => {
            return (
                <button type="button" key={btn.label}
                        className={btn.className} data-mode={btn.mode} onClick={this.setShowMode}>
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
}

export default AppFilter;