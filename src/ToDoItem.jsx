import React, { useState } from "react";

function ToDoItem(props) {
  
  const[dashItem,setDashItem]=useState(false);

  function strikeItem(){
    setDashItem((prevValue)=>{
      return !prevValue
    })
  }

  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
      
       onClick={strikeItem}
      
    >
      <li style={{textDecoration:dashItem?"line-through":"none"}}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
