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
          {name: 'Alex', salary: 5000, increase: false, rise: true, id: 1},
          {name: 'John', salary: 3000, increase: true, rise: false, id: 2},
          {name: 'Mick', salary: 900, increase: false, rise: true, id: 3}
        ],
        searchStr: '',
        filters: [],
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
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      data[index] = {...data[index], [prop]: !data[index][prop]};
      return {
        data: data
      }
    })
  }

  onSearch = (str) => {
    this.setState(({searchStr}) => {
      return {
        searchStr: str
      }
    })
  }

  onFilter = (mode) => {
    let filters = mode === "default" ? [] : [...this.state.filters];
    if ((mode === "promoted" || mode === "moreThanValue")) {
      filters = filters.includes(mode) ? filters.filter(f => f != mode) : [...filters, mode];
    }
    this.setState(() => {
        return {
            filters: filters
        }
    })
  }

  getInfo(){
    return {
      totalEmployees: this.state.data.length,
      rewardedEmployeesNumber: this.state.data.filter(i => i.increase == true).length,
    }
  }

  filterVisibleData = (data, str, filters) => {
    const isPromotedFilterOn = filters.includes("promoted");
    const isMoreThanValueFilterOn = filters.includes("moreThanValue");
    return str.length > 0 || isPromotedFilterOn || isMoreThanValueFilterOn
          ? data.filter(item => {
            if ((isPromotedFilterOn && !item.rise) || (isMoreThanValueFilterOn && item.salary > 1000)) {
              return false;
            }
            return item.name.toUpperCase().includes(str.toUpperCase())
          }) 
          : data;
  };

  render(){

    const {data, searchStr, filters} = this.state;
    const visibleData = this.filterVisibleData(data, searchStr, filters);

    return (
      <div className="app">
          <AppInfo info={this.getInfo()}/>
  
          <div className="search-panel">
              <SearchPanel onSearch={this.onSearch}/>
              <AppFilter onFilter={this.onFilter} filters={filters}/>
          </div>
          
          <EmployeesList data={visibleData} 
            onDelete={this.deleteItem} 
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
