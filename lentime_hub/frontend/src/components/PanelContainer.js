import Panel from "./Panel";

const PanelContainer = function() {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <Panel />
                </div>
                <div className="col-12 col-md-6">
                    <Panel />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Panel />
                </div>
                <div className="col-12 col-md-6">
                    <Panel />
                </div>
            </div>
        </div>
    )
}

export default PanelContainer;