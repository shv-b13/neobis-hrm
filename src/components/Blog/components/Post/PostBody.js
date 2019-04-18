import React from 'react';
import defaultImage from './neobis_background.png';

const PostBody = props => {
    console.log(props);
    return (
        <div>
            <a href={props.articleLink}>
                <div>
                    <img className={'post-image'} src={props.imgSrc ? props.imgSrc : defaultImage} alt={'post-image'}/>
                    <h1 className={'post-title'}>{props.title}</h1>
                </div>
            </a>

            {/* Information about author and pub-date*/}
            <div className={'other-info'}>
                <div className={'author'}>
                    <div>
                        <a href={props.authorLink}>
                            <img className={'author-avatar'} alt={props.authorName}
                                 src={"https://miro.medium.com/fit/c/80/80/" + props.authorAvatar}/>
                        </a>
                    </div>
                    <div>
                        <div>
                            <a href={props.authorLink} className={'author-name'}>{props.authorName}</a>
                        </div>
                    </div>
                </div>
                <div className={'post-date-pub'}>
                    <a href={props.articleLink}
                       className={'date-pub'}>{props.datePublished} : : {props.readingTime} min</a>
                </div>
            </div>
        </div>
    );
};

export default PostBody;