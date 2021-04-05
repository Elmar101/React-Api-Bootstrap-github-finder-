import React,{useState,useEffect,useReducer} from 'react';
import NotesReducer from '../reducer/Notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NoteContext from '../context/note-context';

const NoteApp = () => {

    const [notes,dispatch] = useReducer( NotesReducer, []);

    useEffect(()=> {
        const notesData = JSON.parse(localStorage.getItem('notes'));
        if( notesData){
            dispatch( {type: 'POPULATE_NOTES', notes: notesData} )
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])
    return (
        <NoteContext.Provider value={{notes,dispatch}}>
            <div className="container p-5">
                <div className="card mb-3">
                    <h3 className="card-header text-center"> Notes </h3>
                    {
                        notes && (
                            <table className="table table-sm table-striped mb-0">
                                <tbody> <NoteList/> </tbody>
                            </table>
                        )
                    }
                </div>

                <div className="card mb-3">
                    <h4 className="card-header text-center"> Add a New Notes </h4>
                    <div className="card-body"> <AddNoteForm /> </div>
                </div>
            </div>
        </NoteContext.Provider>

    )
}

export default NoteApp;