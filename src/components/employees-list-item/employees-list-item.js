import './employees-list-item.css';
import React from 'react';

class EmployeesListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        console.log(this.state.increase);
        
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    addLike = () => {
        console.log(this.state.like);
        
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render(){

        const {name, salary} = this.props;
        const {increase, like} = this.state;

        const classNames = `list-group-item d-flex justify-content-between 
                            ${increase ? "increase" : ""} 
                            ${like ? "like" : ""}`;

        return (
            <li className={classNames} onClick={this.addLike}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

// const EmployeesListItem  ({name, salary, increase}) => {

//     const classNames = `list-group-item d-flex justify-content-between ${increase ? "increase" : ""}`;

//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

export default EmployeesListItem;