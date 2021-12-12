import React, { useState } from "react";
function CreateNote(props) {
    
    const [note,setnote]=useState({
        title:"",
        content:"",
    });
    const InputEvent=(e)=>{
        const { name, value }=e.target;

        setnote((prevdata)=>{
            return{
                ...prevdata,
                [name]: value,
            };
        });
        console.log(note);
    };
    const addEvent=()=>{
        props.passNote(note);
        setnote({
            title:"",
            content:"",
        });
    };
  return (
    <>
      <div className="main_note">
          <form>
              <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="title" autoComplete='off'/>
              <textarea name="content" value={note.content} onChange={InputEvent} rows="" cols="" placeholder="Create a Note..."></textarea>
              <button className="btn" onClick={addEvent}>
              <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
          </form>
      </div>
    </>
    
  );
}

export default CreateNote;
