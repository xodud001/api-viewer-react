import React, {useEffect} from 'react';
import { Item } from './Item';
import $ from "jquery";

function renderItem(data, onClick, removeTitle){
    return(
        <Item 
            key={data.pageId}
            id={data.pageId}
            value={data.title}
            isFocus={data.isFocus}
            removeTitle={ removeTitle }
            onClick={onClick}
        />
    );
}

function Titles(props) {
    useEffect(() => {
        if(props.isNewpage){
            $('.board .list ul li:last-child').addClass("active").siblings().removeClass("active");
            props.setNewPage(false);
        }
    });
    
    if(!props.titles) return null;
    return(
        <ul>
            {props.titles.map( page => (
                renderItem(page, props.onClick, props.removeTitle)
            ))}
        </ul>
    );
}

export default Titles;