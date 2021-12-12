import React from "react";
const Note=(props)=> {
  return (
    <>
      <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <button className="btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      </div>
    </>
    
  );
}

export default Note;
