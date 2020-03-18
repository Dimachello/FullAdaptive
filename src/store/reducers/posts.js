const initialState = {
  posts: [],
  postId: null,
  path: null,
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
        postId: action.postId,
        path: action.path
      };

    case "GET_LIKED_POST":
      const likedPost = action.likedPostId;

      let check;

      for (let key in state.likedPosts) {
        if (state.likedPosts[key] === likedPost) {
          check = true;
        }
      }

      if (check) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          likedPosts: state.likedPosts.concat(likedPost)
        };
      }

    case "GET_DELETED_POST":
      const deletedPost = action.deletedPostId;

      return {
        ...state,
        deletedPosts: state.deletedPosts.concat(deletedPost)
      };

    case "GET_SCROLL_POSITION":
      return {
        ...state,
        scrollPosition: action.position
      };
    case "REMOVE_LIKED_POST":
      return {
        ...state,
        likedPosts: action.likedPosts
      };
    case "REMOVE_DELETED_POST":
      return {
        ...state,
        deletedPosts: action.deletedPosts
      }
    case "RETURN_LIKED_POST":
      return {
        ...state,
        deletedPosts: action.deletedPosts,
        likedPosts: action.likedPosts
      };
    default:
      return state;
  }
};

export default reducer;
