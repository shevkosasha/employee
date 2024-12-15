import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const items = data.map(item => {
        const {id, ...itemProps} = item; 
        return (
            <EmployeesListItem 
                key={id} {...itemProps} /*name={i.name} salary={i.salary}*/ 
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    )
}

export default EmployeesList;