import "./styles/Panel.css"
import Filler from "./Filler";

const Panel = function(props) {
    
    return (
        <div className="panel my-1">
            <div className="panel-content">
                {props.content}
            </div>
        </div>
    )
}

export default Panel;