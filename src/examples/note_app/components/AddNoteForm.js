import React,{useState,useEffect,useReducer,useContext} from 'react';
import NoteContext from '../context/note-context';
const AddNoteForm = () => {
    const {dispatch} = useContext(NoteContext);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const addNote = (e) => {
        e.preventDefault();
        if(title || body){
         dispatch( {type:'ADD_NOTES', title, body} );
            setTitle('');
            setBody('');
        }
    }
    return (
        <form className="form" onSubmit={addNote}>
            <div className="form-group">
            <input className="form-control"
                    value={ title }
                    onChange={ (e)=> setTitle(e.target.value)} />
            </div>
            
            <div className="form-group">
            <textarea className="form-control"
                        value={ body }
                        onChange={ (e)=> setBody(e.target.value)} >
            </textarea>
            </div>
            <button className="btn btn-primary btn-block"> Add Note </button>
        </form>
    )
}

export default AddNoteForm
