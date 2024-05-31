import React, { useState }from "react";


function CreateArea(props) {
 
  const [createNote, setNote] = useState({
    note: '',
    Title: ''
  });


 

  function handleText(event){
    const {name, value} = event.target;
  

    setNote(prevValue=>(
      {
        ...prevValue, 
        [name]:value
        
      }
    ))
   
  }

  function pushElement(event){
    props.onAdd(createNote);
    setNote({
      note: '',
      Title: ''
    })
    event.preventDefault();
    
  }

  

  return (
    <div>
      <form>
        <input onChange={handleText} name="Title" value={createNote.Title} placeholder="Title" />
        <textarea onChange={handleText} name="note" placeholder="Take a note..." value={createNote.note} rows="3" />
        <button onClick={pushElement}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
