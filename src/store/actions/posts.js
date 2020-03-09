import axios from "axios";

export const fetchPostsSuccess = fetchedPosts => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts: fetchedPosts
  };
};

export const getSinglePost = id => {
  return {
    type: "GET_SINGLE_POST",
    postId: id
  };
};

export const getScrollPosition = position => {
  return {
    type: "GET_SCROLL_POSITION",
    position: position
  }
} 

export const fetchPosts = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(content => {
      axios.get("https://jsonplaceholder.typicode.com/photos").then(photos => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then(comments => {
            const fetchedPosts = [];
            const fetchedComments = [];

            for (let key in comments.data){
              if(key < 15){
                fetchedComments.push({
                  name: comments.data[key].name,
                  text: comments.data[key].body
                })
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

export const fetchLikedPost = ( postId ) => {
  return {
    type: "GET_LIKED_POST",
    likedPostId: postId - 1
  }
}

export const fetchDeletedPost = ( postId ) => {
  return {
    type: "GET_DELETED_POST",
    deletedPostId: postId - 1
  }
}
