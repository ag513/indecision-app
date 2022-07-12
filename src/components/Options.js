import React from "react"
import Option from "./Option";

const Options = (props) => {
    return(
      <ul>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Add an option to start</p>}
        {props.options.map((option) => (<Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option}/>))}
      </ul>
    )
}

export default Options