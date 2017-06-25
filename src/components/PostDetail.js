import React, { Component } from 'react';

export default function PostDetail(props) {

    const styles = {
        background: {
            display: props.display,
            backgroundColor: "rgba(0, 0, 0, .6)",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            color: "#fff",
            padding: "50px",
            animation: "fadeIn .3s forwards"
        },
        postImg: {
            width: "450px",
            backgroundSize: "100% 100%",
            borderRadius: "3%"
        }
    }
    styles.postImg.backgroundImage = "url(" + props.post.img_url + ")";
    styles.postImg.height = (450 * props.post.size) + "px";
    styles.background.opacity = 1;

    return(
        <div style={styles.background}>
            <div style={styles.postImg}></div>
            <div>{props.post.location}</div>
            <div onClick={props.hidePostDetail}>Close?</div>
        </div>
    )

}
