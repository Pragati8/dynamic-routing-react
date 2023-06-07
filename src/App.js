import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import User from './User';

function App() {
  const users = [
    {name:'Pragati', id:'1'},
    {name:'Diana', id:'2'},
    {name:'Tanvi', id:'3'},
    {name:'Aaftab', id:'4'},
    {name:'Jainam', id:'5'},
    {name:'Sneha', id:'6'},
    {name:'Kush', id:'7'}
  ]

  return (
    <div className="App">
      <Router>
        {
          users.map((user) => {
            return (
              <div>
                <Link to={`/user/${user.id}/${user.name}`}><h3>{user.name}</h3></Link>
              </div>
            )
          })
        }
        <Routes>
          <Route path="/user/:id/:name" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
