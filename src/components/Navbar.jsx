import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">M News</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <li><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                                    <li><Link className="nav-link" to="/business">Business</Link></li>
                                    <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="nav-link" to="/health">Health</Link></li>
                                    <li><Link className="nav-link" to="/science">Science</Link></li>
                                    <li><Link className="nav-link" to="/sports">Sports</Link></li>
                                    <li><Link className="nav-link" to="/technology">Technology</Link></li>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navbar