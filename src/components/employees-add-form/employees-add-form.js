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

    onSubmit = (e) => {
        e.preventDefault();
        const {isValid, errorMsg} = this.validateForm();
        const {name, salary} = this.state;
        if (!isValid) {
            alert(errorMsg);
        } else {
            this.props.onAdd({name: name, salary: salary });
            this.setState(() => ({
                name: '',
                salary: 0
            }))
        }
    }

    validateForm = () => {
        const {name, salary} = this.state;
        let isValid = true;
        let errorMsg = '';
        
        if (name === undefined || name === null || name === '' || name.length < 2) {
            isValid = false;
            errorMsg += "Invalid name\n";
        }
        if (salary < 0 || salary === '' || isNaN(salary)) {
            isValid = false;
            errorMsg += "Invalid salary\n";
        }
        return {
            isValid: isValid, errorMsg: errorMsg
        }
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