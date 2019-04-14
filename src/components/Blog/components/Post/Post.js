import React from 'react';
import './Post.css';
import PostBody from "./PostBody";


const Post = props => {
    const imgSrc = props.imageSrc ? "https://miro.medium.com/fit/c/1400/420/" + props.imageSrc : null;
    const articleLink = "https://medium.com/p/" + props.articleId + "?source=user_profile";
    const authorLink = "https://medium.com/@" + props.username;

    const datePublished = new Date(props.datePublished);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthPublished = months[datePublished.getMonth()];
    const formattedDate = datePublished.getFullYear() + " " + monthPublished + " " + datePublished.getDate();

    return (
        <div>
            <PostBody
                articleLink={articleLink}
                imgSrc={imgSrc}
                title={props.title}
                subtitile={props.subtitle}
                authorLink={authorLink}
                authorName={props.authorName}
                articleLink={articleLink}
                authorAvatar={props.authorAvatar}
                readingTime={props.readingTime}
                datePublished={formattedDate}
            />
        </div>);
};

export default Post;