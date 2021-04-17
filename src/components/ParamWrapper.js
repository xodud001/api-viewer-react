
import Request from './Request'

function typeToString(type){
    switch(type){
        case 0:
            return "Path Parameters";
        case 1:
            return "Query Parameters";
        case 2:
            return "Form Data Parameters";
        case 3:
            return "Body Parameters";
        case 4:
            return "Headers";
        default:
            return "null";
  
    }
  
  }
  
function ParamWrapper(props){
    const type = typeToString(props.type);
    return(
        <div className="params-wrapper">
            <div className="params-title">
                {type}
            </div>
            <div className="param-wrapper">
                {props.params.map( param =>(
                    <Request param={param} />
                ))}
            </div>
            
        </div>
    );
}
  
export default ParamWrapper;

