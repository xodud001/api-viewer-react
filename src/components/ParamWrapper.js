
import Request from './Request'


function ParamWrapper(props){
    return(
        <div className="params-wrapper">
            <div className="params-title">
                {props.params[0].parameterType.type}
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

