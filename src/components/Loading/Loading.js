import React from 'react'
import './styles.css'

class Loading extends React.Component {
    render() {
        var loadDisplay = 'block';

        if (this.props.isLoaded) {
            loadDisplay = 'none';
        }

        return (
            <div id="loading" style={{display: loadDisplay}}>
                <div className="loaders-backdrop"></div>
                <div className="loaders"><span className="loader loader-quart"></span></div>
            </div>
        );
    }
}

export default Loading