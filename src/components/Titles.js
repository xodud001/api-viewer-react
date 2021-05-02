import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Item } from './Item';
import { createURL } from './Server'
import $ from "jquery";

function renderItem(data, onClick){
    return(
        <Item 
            key={data.pageId}
            id={data.pageId}
            value={data.title}
            isFocus={data.isFocus}
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
                renderItem(page, props.onClick)
            ))}
        </ul>
    );
}

export default Titles;