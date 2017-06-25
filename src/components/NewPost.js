import React, { Component } from 'react';

export default class NewPost extends Component {

    state = {
        location: "",
        img_url: ""
    }

    styles = {
    }

    render() {
        return(
            <div>
                <input value={this.state.location} onChange={this.updateLocation} />
                <input value={this.state.img_url} onChange={this.updateImgUrl} />
                <div onClick={this.createPost}>Create</div>
            </div>
        )
    }

    createPost = () => {
        let img = new Image();
        let size;
        img.src = this.state.img_url;
        img.onload = () => {
            console.log("hello");
            size = img.width / img.height;
            this.sendRequest({
                location: this.state.location,
                img_url: this.state.img_url,
                size: size
            })
        }
    }

    sendRequest = post => {
        fetch("/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(response => {
            return response.json();
        }).then(data => {
            this.props.newPost(data);
        });
    }

    computeSize = () => {

    }

    updateImgUrl = e => {
        this.setState({img_url: e.target.value})
    }

    updateLocation = e => {
        this.setState({location: e.target.value})
    }

}
