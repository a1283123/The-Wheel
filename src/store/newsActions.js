import axios from "axios";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const MORE_POSTS = "MORE_POSTS";

export function morePosts(page) {
  console.log(page + 1);
  return {
    type: MORE_POSTS,
    page: page + 1
  };
}

function requestPosts() {
  console.log("requestPost");
  return {
    type: REQUEST_POSTS
  };
}

function receivePosts(json) {
  console.log("receivePost");
  return {
    type: RECEIVE_POSTS,
    posts: json.data.data
  };
}

export function fetchPosts(page) {
  return dispatch => {
    console.log(dispatch);
    dispatch(requestPosts());
    return axios
      .get("http://localhost/readpost2/src/php/test_list_api.php", {
        params: {
          page: page
        }
      })
      .then(json => {
        console.log(json);
        dispatch(receivePosts(json));
      });
  };
}
