import axios from 'axios';
import {ABOUT_US_SUCCESS, FETCH_POSTS_SUCCESS} from "./actionTypes";

const aboutUsSuccess = aboutUs => ({type: ABOUT_US_SUCCESS, aboutUs});

export const fetchSiteInfo = () => {
    return dispatch => {
        axios.get('http://104.236.67.73:3456/api/all/').then(result => {
            dispatch(aboutUsSuccess(result.data));
        })
    }
};

const fetchBlogSuccess = (data) => ({
    type: FETCH_POSTS_SUCCESS,
    posts: data.posts,
    userInformation: data.userInformation
});

export const fetchPosts = () => {
    return dispatch => {
        axios.get('http://104.236.67.73:3456/api/medium/extremetech/').then(result => {
            const json = result.data.contents.replace("])}while(1);</x>", "");
            const convertedArray = JSON.parse(json);
            const posts = convertedArray.payload.references.Post;
            const userInformation = convertedArray.payload.user;
            console.log(convertedArray);

            dispatch(fetchBlogSuccess({posts, userInformation}));
        })
    }
};