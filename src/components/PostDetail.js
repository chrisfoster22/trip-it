import React, { Component } from 'react';

export default function PostDetail(props) {

    const styles = {
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
    styles.postImg.backgroundImage = "url(" + props.post.img_url + ")";
    styles.postImg.height = (300 * props.post.size) + "px";

    return(
        <div style={styles.post}>
            <div style={styles.postImg}></div>
            <div>{props.post.location}</div>
        </div>
    )

}
