import React, { Component } from 'react';
import Post from './Post';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';

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
            return <Post key={post._id} post={post} showPostDetail={this.showPostDetail} />;
        })



        let display = this.state.showDetail ? "flex" : "none";

        return(
            <div>
                <CreatePost newPost={this.newPost} />
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

    newPost = posts => {
        this.setState({posts: posts});
    }

}
