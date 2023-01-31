import { useState } from 'react';
import uuid from 'react-uuid';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);


  const onAddNote = () => {

    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    }

    setNotes([newNote, ...notes]);
  }

  const onRemoveNote = (idToRemove) => {
    setNotes(notes.filter(note => note.id !== idToRemove));
  }

  const getActiveNote = () => {
    return (
      notes.find(({id}) => id === activeNote)
    )
  }

  return (
    <div className='App'>
      <SideBar notes={notes} onAddNote={onAddNote} onRemoveNote={onRemoveNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Content activeNote={getActiveNote()} />
    </div>
  )
};

export default App;