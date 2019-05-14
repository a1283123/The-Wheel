import { RECEIVE_POSTS, REQUEST_POSTS, MORE_POSTS } from "../newsActions";

const initialState = {
  isFetching: false,
  newsLists: [],
  page: 1
};

function news(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        newsLists: [...state.newsLists, ...action.posts]
      });
    case MORE_POSTS:
      return Object.assign({}, state, {
        page: action.page
      });
    default:
      return state;
  }
}

export default news;
