import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import newsIcon from './news-icon.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img className="mx-3 img-rounded img-responsive img-fluid" src={newsIcon} alt="News" width="40px" height="40px" />
                <Link className="navbar-brand fw-bold" to="/"> News App </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link id="pg1" className="nav-link fw-bold" aria-current="page" to="/"> Top Headlines </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="pg2" className="nav-link fw-bold" to="/about"> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="pg3" className="nav-link fw-bold" to="/news/entertainment"> Entertainment </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="pg4" className="nav-link fw-bold" to="/news/business"> Business </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="pg5" className="nav-link fw-bold" to="/news/tech"> Tech </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="pg5" className="nav-link fw-bold" to="/news/covid-19"> Covid-19 </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
