import React, {useState} from 'react';
import "./todo.css";

const Todo = props =>{

        const [textValue, settextValue] = useState('');
        const [taskList, settaskList] = useState([])
      
        const handleClick = () => {
         
          if(textValue !== '')
          {
              const taskDetails = {
                id : Math.floor(Math.random()*1000),
                value:textValue,
                iscompleted: false
              }; 
              settaskList([...taskList,taskDetails]);
          } 
        };
        console.log(taskList)
        const handleChange = (event) => {
          settextValue(event.target.value);
        }

        const deleteValue = (e,id) =>{
            e.preventDefault();
            settaskList(taskList.filter((t) => t.id != id));
        }
      
        return (
          <div className='todo'>
            <input onChange={(e) => handleChange(e)} type="text" id="text"  placeholder="Type a message..." />
            <button onClick={handleClick}  className='add-btn'> Click here</button>
            {taskList!==[]?(
                <ul>
                    {taskList.map((t) =>(
                       <li className='listitem'>{t.value}
                       <button onClick={(e) => deleteValue(e,t.id)} className='delete'>Delete</button>
                       </li>
                       ))}
                </ul>
            ):null}
          </div>
        )
    
}
export default Todo