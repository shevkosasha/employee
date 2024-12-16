import './employees-list-item.css';
import React from 'react';

const EmployeesListItem  = (props) => {

    const {name, salary, onDelete, /*nToggleIncrease, onToggleRise,*/ onToggleProp, increase, rise} = props;
        // const {increase, like} = this.state;

        const classNames = `list-group-item d-flex justify-content-between 
                            ${increase ? "increase" : ""} 
                            ${rise ? "like" : ""}`;

        return (
            <li className={classNames}>
                <span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " data-toggle="increase" onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

// class EmployeesListItem extends React.Component {
//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         increase: false,
//     //         like: false,
//     //     }
//     // }

//     // onIncrease = () => {
//     //     console.log(this.state.increase);
        
//     //     this.setState(({increase}) => ({
//     //         increase: !increase
//     //     }))
//     // }

//     // addLike = () => {
//     //     console.log(this.state.like);
        
//     //     this.setState(({like}) => ({
//     //         like: !like
//     //     }))
//     // }

//     render(){

//         const {name, salary, onDelete, onToggleIncrease, onToggleRise} = this.props;
//         const {increase, like} = this.state;

//         const classNames = `list-group-item d-flex justify-content-between 
//                             ${increase ? "increase" : ""} 
//                             ${like ? "like" : ""}`;

//         return (
//             <li className={classNames}>
//                 <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
//                 <input type="text" className="list-group-item-input" defaultValue={salary}/>
//                 <div className='d-flex justify-content-center align-items-center'>
//                     <button type="button"
//                         className="btn-cookie btn-sm " onClick={onToggleIncrease}>
//                         <i className="fas fa-cookie"></i>
//                     </button>

//                     <button type="button"
//                             className="btn-trash btn-sm " onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>
//         )
//     }
// }

export default EmployeesListItem;