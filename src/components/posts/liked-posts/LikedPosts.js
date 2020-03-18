import React from "react";
import classes from "./liked-posts.module.css";
import classesDeleted from "./deleted-posts.module.css";
import Post from "../post";
import Categories from './categories/Categories';
import { connect } from "react-redux";

class LikedPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleted: false
    };

    this.DeletedPosts = React.createRef();
    this.LikedPosts = React.createRef();
  }

  showDeletedposts = () => {
    this.setState({
      showDeleted: true
    });
  };

  hideDeletedPosts = () => {
    this.setState({
      showDeleted: false
    });
  };

  render() {
    let LikedPostsCategory = [classes.LikedPosts, classes.Active];
    let DeletedPostsCategory = [classes.DeletedPosts];

    if (this.state.showDeleted) {
      LikedPostsCategory.splice(-1, 1);
      DeletedPostsCategory.push(classes.Active);
    }

    return (
      <div className={classes.LikedPostsWrapper}>
        <Categories
          classes={classes}
          LikedPostsCategory={LikedPostsCategory}
          DeletedPostsCategory={DeletedPostsCategory}
          showDeleted={this.state.showDeleted}
          hideDeletedPosts={this.hideDeletedPosts}
          showDeletedposts={this.showDeletedposts}
        />

        <div className={classes.LikedPostsContent}>
          {!this.state.showDeleted
            ? (this.props.likedPosts.length !== 0 ?
             this.props.likedPosts.map(postId => {
                const post = this.props.posts[postId];
                return (
                  <div
                    className={classes.LikedPostWrapper}
                    ref={this.LikedPosts}
                    key={postId}
                  >
                    <Post
                      id={post.id}
                      url={post.url}
                      title={post.title}
                      text={post.body}
                      class={classes}
                      path={"/post/" + post.id}
                      handlersAmount={2}
                    />
                  </div>
                );
              }) : <h3>Press hit button to add your favorite posts</h3>)
            : this.props.deletedPosts.map(postId => {
                const post = this.props.posts[postId];
                return (
                  <div className={classes.LikedPostWrapper} key={postId}>
                    <Post
                      id={post.id}
                      url={post.url}
                      title={post.title}
                      text={post.body}
                      class={classesDeleted}
                      path={"/post/" + post.id}
                      handlersAmount={1}
                    />
                  </div>
                );
              })}
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    likedPosts: state.posts.likedPosts,
    deletedPosts: state.posts.deletedPosts
  };
};

export default connect(mapStateToProps)(LikedPosts);
