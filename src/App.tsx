import { useEffect, useState } from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import getNotes from './requests/getNotes';
import sendNotes from './requests/sendNotes';
import delNotes from './requests/delNotes';
import { ClickButtonType } from './types/ClickButtonType';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  const updateNotesList = () => {
    getNotes().then((response) => {
      return response.json();
    }).then((data) => {
      setNotes(data);
    })
  }

  const addNote: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    sendNotes(e.target.enter.value).then((response) => {
      if(response.ok) updateNotesList();
    })

    e.target.reset();
  }

  const deleteNote: ClickButtonType = (e) => {
    delNotes(e.target.dataset.id).then((response) => {
      if (response.ok) updateNotesList();
    })
  }

  useEffect(() => {
    updateNotesList();

    return () => {
      setNotes([])
    }
  }, [])

  return (
    <>
    <Header refreshNotes={updateNotesList} />
    <NotesList notes={notes} delNote={deleteNote}/>
    <CreateNote addNote={addNote} />
    </>
  )
}

export default App
