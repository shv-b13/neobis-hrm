import {ABOUT_US_SUCCESS, FETCH_POSTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    aboutUs: '',
    achievements: '',
    projects: '',
    posts: '',
    userInformation: ''
};

const reducer  = (state = initialState, action) => {
    switch(action.type) {
        case ABOUT_US_SUCCESS:
            return {...state, aboutUs: action.aboutUs};
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts, userInformation: action.userInformation};
        default :
            return state;
    }
};
export default reducer;