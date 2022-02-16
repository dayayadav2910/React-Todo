import React from "react";
import "./todo.css";

function Tasklist(props) {
  let tasklist = props.tasklists;
  let settasklists = props.settasklists;
  console.log(tasklist);


  const deleteValue = (id) => {
    const updatedItems = tasklist.filter((elem, ind) => {
      return ind !== id;
    });
    settasklists(updatedItems);
  };
  return (
    <div className="todo">

        <ul>
          {tasklist.map((ele,ind)=>(
              <li className="listsitem"> {ele}
              <button onClick={() => deleteValue(ind)} className="delete">
                Delete
              </button>
              </li>)  
            )}
        </ul>

    </div>
  );
}

export default Tasklist;
