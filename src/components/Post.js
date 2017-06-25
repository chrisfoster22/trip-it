import React, { Component } from 'react';

export default class Post extends Component {

    styles = {
        post: {
            minWidth: "300px",
            padding: "20px",
            display: "inline-block"
        },
        postImg: {
            width: "100%",
            backgroundSize: "100% 100%",
            borderRadius: "3%"
        }
    }

    render() {

        this.styles.postImg.backgroundImage = "url(" + this.props.post.img_url + ")";
        this.styles.postImg.height = (300 * this.props.post.size) + "px";

        return(
            <div style={this.styles.post} onClick={this.handleShowPostDetail}>
                <div style={this.styles.postImg}></div>
                <div>{this.props.post.location}</div>
            </div>
        )
    }

    handleShowPostDetail = () => {
        this.props.showPostDetail(this.props.post)
    }

}
