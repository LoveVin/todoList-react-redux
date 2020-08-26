import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Filters from './containers/Filters';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleTodoList/>
      <Filters/>
    </div>
  );
}

export default App;
