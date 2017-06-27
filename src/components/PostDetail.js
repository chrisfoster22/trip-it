import React from 'react';

export default function PostDetail(props) {

    styles.background.display = props.display;
    styles.postImg.backgroundImage = "url(" + props.post.img_url + ")";
    styles.postImg.width = (450 * props.post.size) + "px";

    return(
        <div style={styles.background}>
            <div style={styles.postImg}></div>
            <div>{props.post.location}</div>
            <div onClick={props.hidePostDetail}>Close?</div>
        </div>
    )

}

const styles = {
    background: {
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
        height: "450px",
        backgroundSize: "100% 100%",
        borderRadius: "3%"
    }
}
