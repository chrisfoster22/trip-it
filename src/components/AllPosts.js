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



        let display = this.state.showDetail ? "flex" : "none";

        return(
            <div>
                <div style={this.styles.postsContainer}>{posts}</div>
                <PostDetail display={display} post={this.state.detailedPost}  hidePostDetail={this.hidePostDetail}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
    }

    showPostDetail = (post) => {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        this.setState({showDetail: true, detailedPost: post})
    }

    hidePostDetail = () => {
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
        this.setState({showDetail: false})
    }



}
