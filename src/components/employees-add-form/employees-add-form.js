import { render } from '@testing-library/react';
import React from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: 0,
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    getItem = () => {
        const {name, salary} = this.state;
        if (name === "") return;
        return {
            name: name,
            salary: (salary < 0 || isNaN(salary)) ? 0 : salary 
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.getItem());
        this.setState(() => ({
            name: '',
            salary: 0
        }))
    }

    render(){

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex" onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Employee's name?" 
                        name="name" value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Employee's name in $?" 
                        name="salary" value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit" className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;