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

  addItem = (item = {name: 'Mick', salary: 900}) => {
    this.setState(({data}) => {
      return { 
        data: [
          ...data, 
          {...item, id: this.maxId++, increase: false, rise: false}
        ]}
      })
  }
  
  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      data[index] = {...data[index], increase: !data[index].increase};
      return {
        data: data
      }
    })
  }

  onToggleRise = (id) => {
    console.log(`Rise ${id}`); 
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      data[index] = {...data[index], rise: !data[index].rise};
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
            onDelete={this.deleteItem} onToggleIncrease={this.onToggleIncrease} onToggleRise={this.onToggleRise}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
