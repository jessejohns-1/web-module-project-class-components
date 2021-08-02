import React  from 'react';

const ToDo = props => {

  const handleClick = ()=> {
    // console.log(props.item.name);
    props.handleLists(props.item.id);
    console.log(props.item.id)
  }

  return (
    <div onClick={handleClick}className={`item${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default ToDo;