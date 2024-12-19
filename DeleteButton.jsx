import React from "react";

function DeleteButton({id, onDelete}){
    return <button className="note-item-delete" onClick={() => onDelete(id)}>DELETE</button>
}

export default DeleteButton;