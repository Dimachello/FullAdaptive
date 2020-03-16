import axios from "axios";

export const fetchPostsSuccess = fetchedPosts => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts: fetchedPosts
  };
};

export const getSinglePost = (id, path) => {
  return {
    type: "GET_SINGLE_POST",
    postId: id,
    path: path
  };
};

export const getScrollPosition = position => {
  return {
    type: "GET_SCROLL_POSITION",
    position: position
  };
};

export const fetchPosts = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(content => {
      axios.get("https://jsonplaceholder.typicode.com/photos").then(photos => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then(comments => {
            const fetchedPosts = [];
            const fetchedComments = [];

            for (let key in comments.data) {
              if (key < 15) {
                fetchedComments.push({
                  name: comments.data[key].name,
                  text: comments.data[key].body
                });
              }
            }

            for (let key in content.data) {
              if (key < 15) {
                fetchedPosts.push({
                  ...content.data[key],
                  url: photos.data[key].url,
                  thumbUrl: photos.data[key].thumbnailUrl,
                  comments: fetchedComments
                });
              }
            }

            dispatch(fetchPostsSuccess(fetchedPosts));
          });
      });
    });
  };
};

export const fetchLikedPost = postId => {
  return {
    type: "GET_LIKED_POST",
    likedPostId: postId - 1
  };
};

export const fetchDeletedPost = postId => {
  return {
    type: "GET_DELETED_POST",
    deletedPostId: postId - 1
  };
};

export const removeLikedPost = (array, index) => {
  const id = array.indexOf(index - 1);
  let likedPosts = null;
  if (array.length === 1) {
    likedPosts = [];
  } else {
    likedPosts = [...array.slice(0, id), ...array.slice(id + 1)];
  }

  return {
    type: "REMOVE_LIKED_POST",
    likedPosts: likedPosts
  };
};

export const returnLikedPosts = (arrayDeleted, arrayLiked, index) => {
  const id = arrayDeleted.indexOf(index - 1);
  let deletedPosts = null;
  let likedPosts = [...arrayLiked];
  if (
    arrayDeleted.length === 1 &&
    (likedPosts.length === 0 || likedPosts.length === 1)
  ) {
    deletedPosts = [];
    likedPosts.push(index - 1);
    likedPosts.reverse();
  } else {
    deletedPosts = [...arrayDeleted.filter((item, num) => num !== id)];
    likedPosts = [index - 1, ...likedPosts];
  }

  return {
    type: "RETURN_LIKED_POST",
    deletedPosts: deletedPosts,
    likedPosts: likedPosts
  };
};
