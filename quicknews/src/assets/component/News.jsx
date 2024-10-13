import React, { Component } from 'react';
import Newsitem from './newsitem';
import Spine from './Spine';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import Logostart from './Logostart';

export default class News extends Component {
    static defaultProps = {
        category: 'sports'
    };
    static propTypes = {
        category: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            setProgress : 0
        };
    }

    fetchData = async () => {
        this.props.setProgress(10);
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=9d4b8772c127454085b200daf7d4c3bd&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let passdata = await data.json();
        console.log(passdata);
        this.props.setProgress(65);
        this.setState({
            articles: this.state.articles.concat(passdata.articles),
            totalResults: passdata.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    };

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=9d4b8772c127454085b200daf7d4c3bd&page=1`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let passdata = await data.json();
        console.log(passdata);
        this.props.setProgress(65);
        this.setState({
            articles: passdata.articles,
            totalResults: passdata.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    // nc = async () => {
    //     if ((this.state.page + 1 >= Math.ceil(this.state.totalResults / 4))) {
    //         alert("No more news available!");
    //     } else {
    //         this.fetchData();
    //     }
    // };

    // pc = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=9d4b8772c127454085b200daf7d4c3bd&page=${this.state.page - 1}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let passdata = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: passdata.articles,
    //         loading: false
    //     });
    // };

    render() {
        return (
            <div className="container my-3 mb-2">
                <div
                    className={`bg-${this.props.mode === 'light' ? 'ldark' : 'light'} text-${this.props.mode === 'light' ? 'light' : 'dark'
                        }`}
                >
                    <div className="daily-news">
                        <h1 className="text-center">Know about {this.props.category} </h1>
                        <Logostart />
                    </div>

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<Spine />}
                    >
                        <div className="row">
                            {this.state.articles.map((e) => {
                                return (
                                    <div className="col-md-4" key={e.content}>
                                        <Newsitem
                                            urlToImage={e.urlToImage}
                                            description={e.description ? e.description.slice(0, 50) : ""}
                                            title={e.title ? e.title.slice(0, 30) : ""}
                                            newsurl={e.url}
                                            author={e.author}
                                            source={e.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </InfiniteScroll>

                    
                </div>
            </div>
        );
    }
}