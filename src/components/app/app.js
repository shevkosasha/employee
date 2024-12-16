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
        searchStr: '',
        filters: []
        // {
        //   byPromotion: false,
        //   bySalary: false,
        // }
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

  onSearch = (str) => {
    this.setState(({searchStr}) => {
      return {
        searchStr: str
      }
    })
  }

  onFilter = (filterState) => {
    this.setState(() => {
      return {
        filters: filterState
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
    // return str.length > 0 || filters.byPromotion || filters.bySalary
    return str.length > 0 || filters.includes("promoted") || filters.includes("moreThanValue")
          ? data.filter(item => {
            if ((filters.includes("promoted") && !item.rise) || (filters.includes("moreThanValue") && item.salary > 1000)) {
              return;
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
              <AppFilter onFilter={this.onFilter}/>
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
