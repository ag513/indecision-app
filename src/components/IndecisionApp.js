import React from "react";
import AddOptions from "./AddOption";
import Header from './Header'
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options : props.options
      };
    }
    componentDidMount(){
      try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options){
          this.setState(()=>({options})) 
        }
      }
      catch(e){
        // Do nothing
      }
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        console.log('saving')
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options',json)
      }
    }
    componentWillUnmount(){
      console.log('unmount')
    }
    handleDeleteOptions(){
      this.setState(()=>({ options:[] }));
    }
    handleDeleteOption(optionToRemove){
      this.setState((prevState)=>({ 
        options: prevState.options.filter((option)=> optionToRemove !== option)
      }));
    }
    handlePick(){
      const randonNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randonNum]
      alert(option)
    }
    handleAddOption(option){
      if(!option){
        return 'Enter valid value'
      } else if(this.state.options.indexOf(option)> -1){
        return 'Already exists'
      } 
      this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    render(){
      const title = 'Indecision app'
      const subTitle = 'Leave your life in a hands of a computer'
      return (
        <div>
          <Header title={title} subTitle={subTitle}/>
          <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
          <Options handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
          <AddOptions handleAddOption={this.handleAddOption}/>
        </div>
      )
    }
  }
  
  IndecisionApp.defaultProps = {
    options:[]
  }
  
  
  