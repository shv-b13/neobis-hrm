import React, {Component} from 'react';
import {connect} from "react-redux";
import Post from "../../components/Post/Post";
import {fetchPosts} from "../../store/actions/siteInfo";
import '../../components/Post/Post.css';
import Header from '../../../Header/Header';

class Blog extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
            <div id={'blog-container'}>

                <div className={'main-title-container'}>
                    <h1 className={'blog-title'}>НАШ БЛОГ</h1>
                    <div className={'news'}><h2>ЧИТАЙ НОВОСТИ И СТАТЬИ О <span className={'neobis'}>NEOBIS</span></h2>
                    </div>
                </div>
                <div className={'posts'}>
                    {this.props.posts !== "" && this.props.posts ? (
                        Object.values(this.props.posts).map(post => (
                            <Post
                                articleId={post.id}
                                authorAvatar={this.props.userInformation.imageId}
                                authorName={this.props.userInformation.name}
                                imageSrc={post.virtuals.previewImage.imageId}
                                title={post.title}
                                subtitle={post.content.subtitle}
                                username={this.props.userInformation.username}
                                readingTime={Math.round(post.virtuals.readingTime)}
                                datePublished={post.firstPublishedAt}
                            />
                        ))
                    ) : null}
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.siteInfo.posts,
    userInformation: state.siteInfo.userInformation
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
