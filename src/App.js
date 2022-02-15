import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Tasklist from './components/Tasklist';
import "./components/todo.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const getItemsLocal = () =>{
  let lists = localStorage.getItem('lists');
  if(lists){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];  
  }
}
function App() {
  
  const [textValue, settextValue] = useState('');
  const [tasklists, settasklists] = useState(getItemsLocal());
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(tasklists))
  }, [tasklists]);
  return(
    <div>
      <Router>
       <Navbar></Navbar>
       <Routes>
          <Route exact path="/" element={<Todo textValue={textValue} settextValue={settextValue} tasklists={tasklists} settasklists={settasklists}  />}></Route>
          <Route exact path="/tasklist" element={<Tasklist tasklists={tasklists} settasklists={settasklists}></Tasklist>}></Route>
        </Routes>
      </Router>
    
    </div>

      )
}

export default App;
