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
          {name: 'Alex', salary: 5000, increase: false, rise: false, id: 1},
          {name: 'John', salary: 3000, increase: true, rise: false, id: 2},
          {name: 'Mick', salary: 900, increase: false, rise: true, id: 3}
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

  addItem = (item) => {
    this.setState(({data}) => {
      return { 
        data: [
          ...data, 
          {...item, id: this.maxId++, increase: false, rise: false}
        ]}
      })
  }

  onToggleProp = (id, prop) => {
    console.log(`${prop} ${id}`); 
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      data[index] = {...data[index], [prop]: !data[index][prop]};
      return {
        data: data
      }
    })
  }

  getInfo(){
    return {
      totalEmployees: this.state.data.length,
      rewardedEmployeesNumber: this.state.data.filter(i => i.increase == true).length,
    }
  }

  render(){
    return (
      <div className="app">
          <AppInfo info={this.getInfo()}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} 
            onDelete={this.deleteItem} 
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
