
function typeToString(type){
  switch(type){
    case '1':
      return "string";
    case '2':
      return "long";
    default:
      return "null";

  }

}

function Request(props){
    const type = typeToString(props.param.dataType);
    return(
        <ul key={props.param.id}>
            <li className="name">
              {props.param.name}
            </li>
            <li className="dataType">
                {type}
            </li>
            <li className="description">
              {props.param.description}
            </li>
        </ul>
    );
}

export default Request;