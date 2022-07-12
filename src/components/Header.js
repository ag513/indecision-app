import React from "react";

const Header = (props)=>{
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subTitle && <p>{props.subTitle}</p>} 
      </div>
    )
}

export default Header