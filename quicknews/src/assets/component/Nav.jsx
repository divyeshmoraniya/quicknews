import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ mode, toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/general">General</Link></li>
                                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleMode} checked={mode === 'dark'} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
