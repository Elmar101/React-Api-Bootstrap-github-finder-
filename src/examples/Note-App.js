import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import '../styles/main.scss';

const NoteApp = () => {
    const [ notes, setNotes ] = useState([]);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        if(title || body){
            setNotes( [...notes , { title , body } ] );
            setTitle('');
            setBody('');
        }
    }

    const removeNote = (title) => {
        setNotes( notes.filter( note => note.title !==title ) )
    }

    useEffect(()=> {
        const notesData = JSON.parse(localStorage.getItem('notes'));
        if( notesData){
            setNotes( notesData );
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