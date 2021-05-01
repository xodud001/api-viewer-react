

import { Content } from './Content'

function Request(props){
    return(
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
            <li className="dataType">
                {props.param.dataType.type}
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
    );
}

export default Request;