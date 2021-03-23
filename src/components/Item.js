import React from 'react';

export function Item(props){
    return(
        <button className="item" onClick={props.onClick}>
            Get Problems {props.value}
        </button>
    );
}