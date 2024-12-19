import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, onDelete}) {
    return (
        <div className='note-list'>
            {
                notes.map((notes) => (
                    <NoteItem key={notes.id} id={notes.id} onDelete={onDelete} {...notes} />
                ) )
            }
        </div>
    );    
}

export default NoteList;

