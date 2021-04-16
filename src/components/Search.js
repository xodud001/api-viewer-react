import React from 'react';

export function Search(props){
    return(
        <input type="text" id="search" name="search" placeholder="Search..." onClick={props.onClick}/>
    );
    
}