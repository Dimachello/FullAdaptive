import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import classes from './PostInfo.module.css';
import cross from '../../../imgs/post/back.png';

class Post extends React.Component {

  render() {
    const id = this.props.id - 1;
    const posts = this.props.posts;

    return (
      <div className={classes.SinglePostWrapper}>  
      <div className={classes.Combine}>
        <div className={classes.SinglePostContent}>
        <div className={classes.CrossWrapper}>
          <div className={classes.CrossContainer}>
          <Link to="/"><img src={cross} alt="cross" className={classes.Cross}/></Link>
          </div>
        </div>
        <img src={posts[id].url} alt="thumb" />
        <h3>{posts[id].title}</h3>
        <p>{posts[id].body}</p>
      </div>
      <div className={classes.PostCommentsWrapper}>
        <ul className={classes.PostComments}>
          {
            posts.map((post,idx) => {
              return (
                <li key={idx}>
                  <h4>{post.comments[idx].name}</h4>
                  <p>{post.comments[idx].text}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      </div>
      <div className={classes.RelevantWrapper}>
      <h2>Voluptate iusto</h2>
      <div className={classes.Relevant}>
          {
            this.props.posts.map((post,idx) => {
              return (
                <img key={idx} src={post.thumbUrl} alt="relevant thumbs"/>
              )
            })
          }
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    id: state.posts.postId
  };
};

export default connect(mapStateToProps)(Post);
