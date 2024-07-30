import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [holdItems, setHoldItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function addNote(createNote) {
    setHoldItems(prevValue => {
      return [...prevValue, { Title: createNote.Title || "", note: createNote.note || "" }];
    });
  }

  function DeleteNote(id) {
    setHoldItems(prevValue => {
      return prevValue.filter((holditems, index) => index !== id);
    });
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredItems = holdItems.filter(item =>
    (item.Title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.note || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredItems.map((holditems, index) => (
        <Note
          key={index}
          id={index}
          title={holditems.Title}
          content={holditems.note}
          onDelete={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
