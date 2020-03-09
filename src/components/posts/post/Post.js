import React from "react";
// import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
// import PostAux from './PostAux';
import bin from "../../../imgs/post/bin64.png";
import heart from "../../../imgs/post/heart64.png";
import menu from "../../../imgs/post/menu.png";

class Post extends React.Component {

  state = {
    showTools: false
  }

  toggelTools = () => {
    this.setState(prevState => {
      return ({
        showTools: !prevState.showTools
      })
    })
  }

  render() {
    // const { propsClasses }= this.props.class;
    return (
        // <React.Fragment>
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
        <div className={this.props.class.Number}><span>{this.props.id}</span></div>
        <div className={this.props.class.DeleteLikedPost} onClick={() => {
          this.props.fetchDelete(this.props.id)
        }}>
            <img src={bin} alt="bin" />
        </div>
        </div>
        {/* <div className={this.props.class.DeleteLikedPost}>
            <img src={bin} alt="bin" />
        </div> */}
        <div className={this.props.class.ToolsWrapper}>
          <div className={this.props.class.PostMenuWrapper} onClick={this.toggelTools}>
            <img src={menu} alt="post menu" />
          </div>
          {this.state.showTools ? 
          <div className={this.props.class.Tools}>
            <img className={this.props.class.ToolBin} src={bin} alt="delete" />
            <img className={this.props.class.ToolHeart} src={heart} alt="like"  onClick={() => this.props.fetchLike(this.props.id)}/>
          </div> : null
          }
        </div>
        </div>
        /* </React.Fragment> */
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(actions.getSinglePost(id)),
    fetchLike: id => dispatch(actions.fetchLikedPost(id)),
    fetchDelete: id => dispatch(actions.fetchDeletedPost(id))
  };
};

export default connect(null, mapDispatchToProps)(Post);
