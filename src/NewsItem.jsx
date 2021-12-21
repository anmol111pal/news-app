import React from 'react'

const NewsItem = (props) => {
    const styling={
        width: "18rem"
    }

    return (
        <div className="card" style={styling}>
            <img className="card-img-top" src={props.image} alt="News" />
            <div className="card-body">
                <h5 className="card-title"> {props.title} </h5>
                <p className="card-text"> {props.content} </p>
                <a href={props.url} className="btn btn-primary"> Read more </a>
            </div>
        </div>
    )
}

export default NewsItem
