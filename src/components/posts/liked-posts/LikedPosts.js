import React from "react";
import classes from "./liked-posts.module.css";
import classesDeleted from './deleted-posts.module.css';
import Post from "../post";
import { connect } from "react-redux";

class LikedPosts extends React.Component {
  
  constructor(props){
      super(props);

      this.state = {
          showDeleted: false
      }

      this.DeletedPosts = React.createRef();
      this.LikedPosts = React.createRef();
  }

  showDeletedposts = () => {
      this.setState({
          showDeleted: true
      })
  }

  hideDeletedPosts = () => {
    this.setState({
        showDeleted: false
    })
  }

  render() {
    let LikedPostsCategory = [classes.LikedPosts, classes.Active];
    let DeletedPostsCategory = [classes.DeletedPosts];
    
    if(this.state.showDeleted){
        LikedPostsCategory.splice(-1,1);
        DeletedPostsCategory.push(classes.Active);
    }

    return (
      <div className={classes.LikedPostsWrapper}>
        <div className={classes.Categories}>
            <div className={LikedPostsCategory.join(' ')} name="LikedPosts" onClick={() => {
                if(this.state.showDeleted){
                    this.hideDeletedPosts();
                } else {
                    return 0
                }
            }}>
                Saved
            </div>
            <div className={DeletedPostsCategory.join(' ')} name="DeletedPosts" onClick={() => {
                if(this.state.showDeleted){
                    return 0
                } else {
                    this.showDeletedposts();
                }
            }}>
                Deleted
            </div>
        </div>
        <div className={classes.LikedPostsContent}>
        {
        !this.state.showDeleted ? 
        this.props.likedPosts.map(postId => {
          const post = this.props.posts[postId];
          return (
            <div className={classes.LikedPostWrapper} ref={this.LikedPosts} key={postId}>
              <Post
                id={post.id}
                url={post.url}
                title={post.title}
                text={post.body}
                class={classes}
              />
            </div>
          );
        }) : 
        this.props.deletedPosts.map(postId => {
          const post = this.props.posts[postId];
          return (
            <div className={classes.LikedPostWrapper} key={postId}>
              <Post
                id={post.id}
                url={post.url}
                title={post.title}
                text={post.body}
                class={classesDeleted}
              />
            </div>
          );
        })
        }
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
