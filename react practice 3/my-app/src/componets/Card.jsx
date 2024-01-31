import React from "react";

export default function Card (props){

    return(
        
           <div className="card">
                <h1 className="card_h1">{props.emoji}  </h1>
                <h2 className="card_h2"> {props.title} </h2>
                <p>{props.content}</p>
                
         
        </div>
    )
}

