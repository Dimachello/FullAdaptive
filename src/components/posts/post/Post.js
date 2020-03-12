import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import bin from "../../../imgs/post/bin64.png";
import return64 from "../../../imgs/posts/return64.png";
import heart from "../../../imgs/post/heart64.png";
import menu from "../../../imgs/post/menu.png";

class Post extends React.Component {
  state = {
    showTools: false
  };

  toggelTools = () => {
    this.setState(prevState => {
      return {
        showTools: !prevState.showTools
      };
    });
  };

  render() {
    return (
      <div className={this.props.class.ItemPostWrapper}>
        <div className={this.props.class.PostContent}>
          <Link to={this.props.path}>
            <img
              className={this.props.class.PostPhoto}
              src={this.props.url}
              alt="thumb"
              onClick={() => this.props.getPost(this.props.id)}
            />
          </Link>
          <h3 className={this.props.class.PostTitle}>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <div className={this.props.class.Number}>
            <span>{this.props.id}</span>
          </div>
          <div
            className={this.props.class.DeleteLikedPost}
            onClick={() => {
              this.props.fetchDelete(this.props.id);
              this.props.removeLikedPost(this.props.likedPosts, this.props.id);
            }}
          >
            <img src={bin} alt="bin" />
          </div>
          <div
            className={this.props.class.ReturnDeletedPost}
            onClick={() => {
              this.props.returnLikedPost(this.props.deletedPosts,this.props.likedPosts,this.props.id);
              // console.log(this.props.id)
            }}
          >
            <img src={return64} alt="bin" />
          </div>
        </div>
        <div className={this.props.class.ToolsWrapper}>
          <div
            className={this.props.class.PostMenuWrapper}
            onClick={this.toggelTools}
          >
            <img src={menu} alt="post menu" />
          </div>
          {this.state.showTools ? (
            <div className={this.props.class.Tools}>
              {/* <img className={this.props.class.ToolBin} src={bin} alt="delete" /> */}
              <img
                className={this.props.class.ToolHeart}
                src={heart}
                alt="like"
                onClick={() => {this.props.fetchLike(this.props.id);
                  this.toggelTools()
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likedPosts: state.posts.likedPosts,
    deletedPosts: state.posts.deletedPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(actions.getSinglePost(id)),
    fetchLike: id => dispatch(actions.fetchLikedPost(id)),
    fetchDelete: id => dispatch(actions.fetchDeletedPost(id)),
    removeLikedPost: (array,index) => dispatch(actions.removeLikedPost(array,index)),
    returnLikedPost: (arrayDeleted,arrayLiked, index) => dispatch(actions.returnLikedPosts(arrayDeleted,arrayLiked,index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
