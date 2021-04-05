import React,{useContext} from 'react';
import NoteContext from '../context/note-context';

const Note = ({note}) => {
    const {dispatch} = useContext(NoteContext);
    return (
        <tr>
            <td style={{width: '40%'}}> {note.title} </td>
            <td> {note.body} </td>
            <td style={{width: '3%'}}>
                {
                    <button className="btn btn-sm btn-danger"
                            onClick={ () => dispatch({type:'REMOVE_NOTES', title: note.title})}
                    >
                        <i className="far fa-times"></i>
                    </button>
                }
            </td> 
        </tr>
    )
}

export default Note
