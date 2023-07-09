import Panel from "./Panel";

const PanelContainer = function(props) {
    
    return (
        <div className="container">
            <div className="row mx-3">
                <div className="col-12 col-md-6 mb-3">
                    <Panel content="Career" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Panel content="Projects" />
                </div>
            </div>
            <div className="row mx-3">
                <div className="col-12 col-md-6 mb-3">
                    <Panel content="Streaming" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Panel content="Blog" />
                </div>
            </div>
        </div>
    )
}

export default PanelContainer;