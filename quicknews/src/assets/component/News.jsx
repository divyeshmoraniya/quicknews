import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spine from './Spine';
import InfiniteScroll from 'react-infinite-scroll-component';
import Logostart from './Logostart';


export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            props.setProgress(10);
            let url = `/api/v2/top-headlines?country=us&category=${props.category}&apiKey=YOUR_API_KEY&page=1`;;
            setLoading(true);
            try {
                let data = await fetch(url);
                let passdata = await data.json();
                props.setProgress(65);
                setArticles(passdata.articles);
                setTotalResults(passdata.totalResults);
                setLoading(false);
                props.setProgress(100);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [props.category]);

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `/api/v2/top-headlines?country=us&category=${props.category}&apiKey=YOUR_API_KEY&page=1`;;

        let data = await fetch(url);
        let passdata = await data.json();
        setArticles(articles.concat(passdata.articles));
    };

    return (
        <div className={`container my-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className="text-center">Know about {props.category}</h1>
            <Logostart />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spine />}
            >
                <div className="row">
                    {articles && articles.length > 0 && articles.map((e, index) => (

                        <div className="col-md-4" key={index}>
                            <Newsitem
                                title={e.title ? e.title : "No Title"}
                                description={e.description ? e.description : "No Description"}
                                urlToImage={e.urlToImage ? e.urlToImage : "default-image-url"}
                                newsurl={e.url ? e.url : "#"}
                                source={e.source ? e.source.name : "Unknown Source"}
                            />

                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}
