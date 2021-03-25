import React from 'react';

export function Search(props){
    return(
        <input type="text" id="search" name="search" onClick={props.onClick}/>
    );
    
}