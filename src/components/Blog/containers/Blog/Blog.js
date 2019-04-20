import React, {Component} from 'react';
import {connect} from "react-redux";
import Post from "../../components/Post/Post";
import {fetchPosts} from "../../store/actions/siteInfo";
import '../../components/Post/Post.css';
import neobis_logo_name from './img/Mask_Group.png';
import up from './img/Group.png';
import Header from '../../../Header/Header';

class Blog extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header/>
                <div className={'main-title-container'}>
                    <div><h1 className={'blog-title'}>НАШ БЛОГ</h1></div>
                    <div className={'blog-news'}><h2>ЧИТАЙ НОВОСТИ И СТАТЬИ О <span className={'neobis-title'}>NEOBIS</span></h2>
                    </div>
                </div>
                <div  id={'blog-container'}>
                    <div className={'posts'}>
                        {this.props.posts !== "" && this.props.posts ? (
                            Object.values(this.props.posts).map((post, index) => (
                                <Post
                                    index={index}
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
                <footer className="footer-blog">
                    <div>
                        <a href="#header">
                            <img src={up} className="blog_btn-top__img"/>
                        </a>
                    </div>
                    <div className="neobis_logo_footer_detailed">
                        <img src={neobis_logo_name}/>
                    </div>
                    <div className="blog_our_email">
                        <p>Наша почта: </p>
                        <p>neolabs@gmail.com</p>
                    </div>
                    <div className="blog_our_tel_number">
                        <p>Наш телефон:</p>
                        <p>0554112233</p>
                    </div>

                </footer>
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
