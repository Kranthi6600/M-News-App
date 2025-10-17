import React, { Component } from 'react';
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 4,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            hasMore: true
        }
    }

    async updateNews() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5544b8d89b5f41f1810372e8dea4b9dd&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        const fetchedArticles = parsedData.articles || [];

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: 1,
            hasMore: fetchedArticles.length === this.props.pageSize
        })
    }

    async componentDidMount() {
       this.updateNews()
    }

    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5544b8d89b5f41f1810372e8dea4b9dd&page=${nextPage}&pageSize=${this.props.pageSize}`;
        const res = await fetch(url);
        const data = await res.json();

        const newArticles = data.articles || [];

        this.setState({
            articles: this.state.articles.concat(newArticles),
            totalResults: data.totalResults || this.state.totalResults,
            page: nextPage,
            hasMore: newArticles.length === this.props.pageSize
        });
    };

    refresh = async () => {
        await this.updateNews();
    };

    render() {
        return (
            <>

                <InfiniteScroll
                    pullDownToRefresh // to enable the feature
                    refreshFunction={this.refresh}
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    // hasMore={this.state.articles.length < this.state.totalResults}
                    hasMore={this.state.hasMore}
                    loader={<Spinner />}>
                    <div className="container">
                        <h1 style={{ marginTop: '70px' }}>{`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News - 🔥Top Headlines`}</h1>
                        <div className='row'>
                            {this.state.articles && this.state.articles.map((element) => {
                                return <div className="col-md-4 mt-4 d-flex align-items-stretch" key={element.url}>
                                    <Newsitem
                                        title={element.title}
                                        imageUrl={element.urlToImage}
                                        description={element.description}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                        category={this.props.category}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News