import React from 'react';

function NoteBody({createdAt, body}) {
    return (
        <div className='note-body'>
            <p className='createdAt'>{createdAt}</p>
            <p>{body}</p>
        </div>
    );    
}


export default NoteBody;