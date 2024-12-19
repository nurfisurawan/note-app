import React from 'react';
import NoteTitle from './NoteTitle';
import NoteBody from './NoteBody';
import DeleteButton from './DeleteButton';

function NoteItem({title, createdAt, body, id, onDelete}) {
    return (
        <div className='note-item'>
            <NoteTitle title={title} />
            <NoteBody createdAt={createdAt} body={body} />
            <DeleteButton id={id} onDelete={onDelete}/>

        </div>
    );
    
}

export default NoteItem;