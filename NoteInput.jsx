import React from 'react';

class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            title:'',
            body:'',
        }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
              body: event.target.value,
            }
          });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
      }

    

    render(){
        return(
            <div className='form-input'>
                <h2>Tambah Catatan</h2>
                <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea placeholder="Tulis Catatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">ADD</button>
                </form>
            </div>
            
        )
    }
}

export default NoteInput;