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
            <a href="#" className="item" onClick={props.onClick} data-tag={props.id}>
                {props.value.length > 0 && props.value}
            </a>
            <button class="remove" onClick={props.removeTitle}>
                <i class="fa fa-close fa-lg" data-tag={props.id}></i>
            </button>
        </li>
    );
}