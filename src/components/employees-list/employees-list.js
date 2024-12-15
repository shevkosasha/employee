import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const items = data.map(item => {
        const {id, ...itemProps} = item; 
        return (
            <EmployeesListItem 
                key={id} {...itemProps} /*name={i.name} salary={i.salary}*/ 
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
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