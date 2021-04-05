import React,{useContext} from 'react';
import Note from './Note';

import NoteContext from '../context/note-context';
const NoteList = () => {
    const { notes } = useContext(NoteContext);
    return (
        notes.map( note=>
            <Note note={note} key={note.title}/>
        )
    )
}

export default NoteList
