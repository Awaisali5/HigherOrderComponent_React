import React from 'react'
import UserList from './UserList'
import TodoList from './TodoList'
import './App.css'
import SearchUsers from './UserList'
import SearchTodos from './TodoList'

const App = () => {
  return (
    <div>
      <h2>Higher Order Component In React!</h2>
      <div className="section">
        <div>
        <SearchUsers/>

        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  )
}

export default App