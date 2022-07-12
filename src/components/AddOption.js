import React from "react";

export default class AddOptions extends React.Component {
    constructor(props){
      super(props);
      this.onFormSubmit=this.onFormSubmit.bind(this)
      this.state ={
        error:undefined
      }
    }
    onFormSubmit(e){
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option)
      this.setState(()=>({ error }))
      if(!error){
        e.target.elements.option.value=''
      }
    }
    render(){
      return(
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
          </form>
        </div>
      )
    }
  }