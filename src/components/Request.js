


function Request(props){
    return(
        <ul key={props.param.reqParamId}>
            <li className="name">
              {props.param.name}
            </li>
            <li className="dataType">
                {props.param.dataType.type}
            </li>
            <li className="description">
              {props.param.description}
            </li>
        </ul>
    );
}

export default Request;