import React, {useEffect} from 'react';

import $ from "jquery";

export function Item(props){
    useEffect(()=>{
        $('.list ul li').click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
    return(
        <li>
            <a href="#" className="item" onClick={props.onClick}>
                {props.value}
            </a>
        </li>
    );
}