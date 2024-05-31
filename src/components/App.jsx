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

  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote} />
      {holdItems.map(holditems=>{
        return<Note  title={holditems.Title} content={holditems.note}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
