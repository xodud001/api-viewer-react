
import React, { useEffect } from 'react';
import { Content } from './Content'
import $ from "jquery";

const DropDownDate = (props) => {
    useEffect(()=>{
        $(`.detail .page .bottom .wrapper ul .${props.id} .dropdown-data ul button`).click(function(){
            $(`.detail .page .bottom .wrapper ul .${props.id}`).removeClass('toggle');
        });
    });
    
    return(
        <div className="dropdown-data">
            <ul>
                <li>
                    <button onClick={props.changeDataType} value={`string ${props.id}`} >string</button>
                </li>
                <li>
                    <button onClick={props.changeDataType} value={`number ${props.id}`} >number</button>
                </li>
                <li>
                    <button onClick={props.changeDataType} value={`integer ${props.id}`} >integer</button>
                </li>
                <li>
                    <button onClick={props.changeDataType} value={`boolean ${props.id}`} >boolean</button>
                </li>
                <li>
                    <button onClick={props.changeDataType} value={`array ${props.id}`} >array</button>
                </li>
                <li>
                    <button onClick={props.changeDataType} value={`object ${props.id}`} >object</button>
                </li>
            </ul>
        </div>
    );
}

function Request(props){
    return(
        <div className="container">
            <ul key={props.param.reqParamId}>
                <li className="name">
                <Content
                    class={"name"}
                    page={ props.param.name }
                    value={ props.param.name }
                    onChange={ props.changeData}
                    number = {props.param.reqParamId}
                />
                </li>
                <li className={`dataType ${props.param.reqParamId}`}>
                    <div>
                        <button class="data-btn" onClick={() => { $(`.detail .page .bottom .wrapper ul .${props.param.reqParamId}`).toggleClass('toggle'); } } >{props.param.dataType.type}</button>
                        <DropDownDate id={props.param.reqParamId} changeDataType={props.changeDataType}/>
                    </div>
                </li>
                <li className="description">
                <Content
                    class={"description"}
                    page={ props.param.description }
                    value={ props.param.description }
                    onChange={ props.changeData}
                    number = {props.param.reqParamId}
                />
                </li>
            </ul>
            <button class="remove" onClick={props.removeParam}>
                    <i class="fa fa-close fa-lg" data-tag={props.param.reqParamId}></i>
            </button>
        </div>
    );
}

export default Request;