import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetchNews()
        return (() => {
            ;
        }
        )
    }, [])

    const fetchNews = async () => {
        const API_KEY = 'd5812504f8184bd1897750125960a1d2'
        let url

        const pathname = window.location.pathname
        if (pathname === "/") { // top-headlines
            url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
            document.title="News - Top Headlines"
        } else {
            let topic
            if(pathname.search("entertainment")!==-1)
                topic = "entertainment"
            if(pathname.search("business")!==-1)
                topic = "business"
            if(pathname.search("tech")!==-1)
                topic = "tech"
            if(pathname.search("covid-19")!==-1)
                topic = "covid-19"
            url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`
            document.title=`News - ${topic}`
        }
        console.log("URL: " + url)
        const response = await fetch(url)
        const data = await response.json()
        setNews(data['articles'])
    }

    return (
        <div class="container mt-4">
            <div className="row">
                {
                    news.map((currentArticle) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <NewsItem title={currentArticle.title} url={currentArticle.url} content={currentArticle.content} image={currentArticle.urlToImage} />
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default News
