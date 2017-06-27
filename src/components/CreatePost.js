import React, { Component } from 'react';

export default class CreatePost extends Component {

    state = {
        open: false
    }

    render() {

        if (!this.state.open) {
            return <div onClick={()=>{this.setState({open: true})}}style={styles.createPostIcon}>New Post</div>
        }

        return(
            <div style={styles.modalBg}>
                <div style={styles.modal}>
                    <div onClick={()=>{this.setState({open:false})}}>Close?</div>
                    <input value={this.state.location} onChange={this.updateLocation} />
                    <input value={this.state.img_url} onChange={this.updateImgUrl} />
                    <div onClick={this.createPost}>Create</div>
                </div>
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
            this.setState({open: false, img_url: "", location: ""})
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


const styles = {
    createPostIcon: {
        position: "absolute",
        right: "20px",
        top: "56px",
        color: "#fff",
        cursor: "pointer"
    },
    modalBg: {
        backgroundColor: "rgba(0, 0, 0, .6)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        color: "#fff",
        animation: "fadeIn .3s forwards"
    },
    modal: {
        width: "75%",
        maxWidth: "600px",
        margin: "50px auto",
        backgroundColor: "#fff",
        color: "#000"
    }
}
