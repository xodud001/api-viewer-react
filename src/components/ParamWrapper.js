
import Request from './Request'


function ParamWrapper(props){
    return(
        <div className="params-wrapper">
            <div className="params-title">
                {props.params[0].parameterType.type}
            </div>
            <div className="param-wrapper">
                {props.params.map( param =>(
                    <Request param={param} page={ props.page } changeData={ props.changeData} removeParam={props.removeParam} changeDataType={props.changeDataType} />
                ))}
            </div>
            
        </div>
    );
}
  
export default ParamWrapper;

