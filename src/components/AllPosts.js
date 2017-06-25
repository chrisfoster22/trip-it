import React, { Component } from 'react';
import Post from './Post';
import PostDetail from './PostDetail'

export default class AllPosts extends Component {

    state = {
        posts: [],
        showDetail: false,
        detailedPost: {}
    }

    styles = {
        postsContainer: {
            columnCount: 3,
            columnGap: "15px",
            columnFill: "auto",
            maxWidth: "1100px",
            margin: "20px auto"
        }
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post post={post} showPostDetail={this.showPostDetail} />;
        })

        return(
            <div>
                <div style={this.styles.postsContainer}>{posts}</div>
                <PostDetail post={this.state.detailedPost}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
    }

    showPostDetail = (post) => {
        this.setState({showDetail: true, detailedPost: post})
    }



}
