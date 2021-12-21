import React from 'react'
import { Link } from 'react-router-dom'
import mailImage from './mail.jpg'

const About = () => {
    document.title = "About - News App"
    
    return (
        <>
            <br />
            <div className="jumbotron container mt-3">
                <h1 className="display-4">Hello, readers!</h1>
                <h5 className="lead">This application enables you to read through the current happenings around the world and a bunch of topics of common interest.</h5>
                <hr className="my-4" />
                <p> This application is built using React and Bootstrap. We've used an API to fetch news for you.</p>

                <div className="row mx-auto">
                    <div className="col-lg-6">
                        <p class="lead">
                            <Link className="btn btn-outline-primary btn-lg" to="/" role="button"> Read </Link>
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <span className="mx-3">Contact </span>
                            <code className="lead ml-3">
                                anmol111pal@gmail.com
                            </code>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
