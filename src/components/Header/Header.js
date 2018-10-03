import React from 'react'
import logo from './logo.png';
import './styles.css'

class Header extends React.Component {
    render() {
        return (
            <header className="header navbar fixed-top navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand logo" href="#">
                        <img src={logo} alt="FuturoLAN" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headernav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="lnr lnr-text-align-right"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-sm-row-reverse" id="headernav">
                        <ul className=" nav navbar-nav menu">
                            {/*<li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header