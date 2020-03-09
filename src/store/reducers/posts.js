const initialState = {
  posts: [],
  postId: null,
  likedPosts: [],
  deletedPosts: [],
  scrollPosition: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.posts
      };

    case "GET_SINGLE_POST":
      return {
        ...state,
        postId: action.postId
      };

    case "GET_LIKED_POST":
      const likedPost = action.likedPostId;

      return {
        ...state,
        likedPosts: state.likedPosts.concat(likedPost)
      };

    case "GET_DELETED_POST":
      const deletedPost = action.deletedPostId;

      return {
        ...state,
        deletedPosts: state.deletedPosts.concat(deletedPost)
      }

    case "GET_SCROLL_POSITION":
      return {
        ...state,
        scrollPosition: action.position
      };
    default:
      return state;
  }
};

export default reducer;
