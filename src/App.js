import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
//setting dummy data
const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Organize depression closet',
    id: 1528817077386,
    completed: false
  },
  {
    task: 'Bake more Cookies',
    id: 15288123084358,
    completed: false
  }, {
    task: 'burn neighbors house down',
    id: 1524317077286,
    completed: false
  },
  {
    task: 'Bake Cookies because you burned the last ones',
    id: 152128317084358,
    completed: false
  },
  {
    task: 'burn neighbors house down216546516516561165165165165165165',
    id: 1213131,
    completed: false
  },
]




class App extends React.Component {
 
  constructor() {
    super()
    this.state = {
      list: list
    }
  }
  
  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      list: [...this.state.list, newItem]
    });
  }


  handleLists = (id)=> {
    
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return({
            ...item,
            completed: !item.completed
          });
        }

        return item;
      })
    });
  }

  handleClear = () => 
  {
    //filter through groceries
    //remove all groceries where purchased === true
    //set state to THAT list
    this.setState({
      ...this.state,
      list: this.state.list.filter(item=>{
        return(item.completed === false);
      })
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (<div>
      {/* <TodoList /> */}
        <h2>Welcome to the main app</h2>
      <TodoForm handleAddItem={this.handleAddItem}/>
      <TodoList handleClear={this.handleClear} handleLists={this.handleLists} list={this.state.list}/>
      </div>
    );
  }
}

export default App;
