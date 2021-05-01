import React from 'react';

export function Content(props){
    var name;
    if(props.number)
        name = `${props.class} ${props.number}`;
    else
        name = props.class;

    return(
        <input 
            type="text" 
            className={props.class} 
            value={props.value} 
            onChange={props.onChange} 
            name={name}
            autoComplete="off"
        />
    );
}