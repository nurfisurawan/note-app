import React from 'react';
import NoteList from './NoteList';
import { getData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString,
                    }
                ]
            }
        });
    }

    render(){
        return(
        <div className='note-app'>
            <NoteInput addNote={this.onAddNoteHandler}/>
            <h2>Daftar Catatan</h2>
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
        )
    }
}



export default NoteApp;