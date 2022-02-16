import React from "react";
import "./todo.css";

const Todo = (props) => {
  let tasklists = props.tasklists;
  let textValue = props.textValue;
  let settasklists = props.settasklists;
  let settextValue = props.settextValue;

  const handleClick = () => {
    if (textValue !== "") {
      settasklists([...tasklists, textValue]);
      settextValue("");
    }
  };

  const deleteValue = (id) => {
    const updatedItems = tasklists.filter((elem, ind) => {
      return ind !== id;
    });
    settasklists(updatedItems);
  };

  return (
    <div className="todo">
      <input
        value={textValue}
        onChange={(e) => settextValue(e.target.value)}
        type="text"
        id="text"
        placeholder="Type a message..."
      />
      <button onClick={handleClick} className="add-btn">
        {" "}
        Click here
      </button>
      {tasklists !== [] ? (
        <ul>
          {tasklists.map((ele, ind) => (
            <li className="listsitem" key={ind}>
              {ele}
              <button onClick={() => deleteValue(ind)} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Todo;
