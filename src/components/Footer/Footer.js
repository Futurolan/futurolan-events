import React from 'react'
import logo from './logo.png';
import './styles.css'

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <img src={logo} alt="FuturoLAN" className="img-fluid" />
                </div>
            </footer>
        );
    }
}

export default Footer