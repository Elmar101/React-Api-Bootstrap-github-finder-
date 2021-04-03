import React,{useState,useEffect,useReducer} from 'react'
import ReactDOM from 'react-dom';
import '../styles/main.scss';

const notesReducer = ( state, action) =>{
    switch(action.type){
        case 'POPULATE_NOTES': 
            return action.notes;
        
        case 'ADD_NOTES':
            return [...state, { title: action.title , body:action.body }];
        
        case 'REMOVE_NOTES':
            return state.filter( note => note.title !== action.title );

        default: 
            return state;
    }
}
const NoteApp = () => {
    //const [ notes, setNotes ] = useState([]);
    const [notes,dispatch] = useReducer( notesReducer, []);
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

    const removeNote = (title) => {
        dispatch({type:'REMOVE_NOTES', title });
    }

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
        <div className="container p-5">
            <div className="card mb-3">
                <h3 className="card-header text-center"> Notes </h3>
                {
                    notes && (
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                {
                                    notes.map( note=>
                                        <tr key={note.title}>
                                           <td style={{width: '40%'}}> {note.title} </td>
                                           <td> {note.body} </td>
                                           <td style={{width: '3%'}}>
                                               {
                                                   <button className="btn btn-sm btn-danger"
                                                           onClick={ () => removeNote(note.title)}
                                                   >
                                                       <i className="far fa-times"></i>
                                                   </button>
                                               }
                                           </td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>

            <div className="card mb-3">
                <h4 className="card-header text-center"> Add a New Notes </h4>

                <div className="card-body">
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
                </div>
            </div>
            
        </div>
    )
}


ReactDOM.render(<NoteApp/>, document.getElementById('root') );
export default NoteApp;