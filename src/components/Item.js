import React from 'react';

export function Item(props){
    return(
        <button className="item" value={props.id}>
            {props.value}
        </button>
    );
}