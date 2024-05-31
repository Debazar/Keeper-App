import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [holdItems, setHoldItems]= useState([])

  function addNote(createNote){
    setHoldItems(prevValue=>{
      return[...prevValue, createNote]
    })
    
    
  }

  function DeleteNote(id){
     setHoldItems(prevValue =>{
     return prevValue.filter(
        (holditems, index) =>{
          return index !== id;
        }
      )
     })
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote} />
      {holdItems.map((holditems, index)=>{
        return<Note key={index} id={index} title={holditems.Title} content={holditems.note} onDelete={DeleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
