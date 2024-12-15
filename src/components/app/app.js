import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        data: [
          {name: 'Alex', salary: 5000, increase: false, id: 1},
          {name: 'John', salary: 3000, increase: true, id: 2},
          {name: 'Mick', salary: 900, increase: false, id: 3}
        ],
      }
      this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item =>  item.id !== id)
      }
    })
  };

  addItem = (item = {name: 'Mick', salary: 900}) => {
    this.setState(({data}) => {
      return { 
        data: [
          ...data, 
          {...item, id: this.maxId++, increase: false}
        ]}
      })
  }
  

  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
