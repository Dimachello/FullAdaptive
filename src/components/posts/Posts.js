import React from "react";
import classes from "./Posts.module.css";
import PostClasses from "./post/Post.module.css";
import Post from "./post";
import Spinner from "../spinner/Spinner";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import PostAux from "./post/PostAux";
import SearchError from "./SearchError";
import topArrow from "../../imgs/posts/up-arrow64.png";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      refs: [],
      isError: false
    };

    this.scrollBtn = React.createRef();
  }

  componentDidMount() {
    this.props.onFetchPosts();
    window.addEventListener("scroll", this.toggleScrollBtn);
    window.scrollTo({
      top: this.props.scrollPosition,
      behaviour: "smooth"
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleScrollBtn);
  }

  inputHandler = event => {
    let value = event.target.value;
    this.setState({
      input: value
    });
  };

  toggleScrollBtn = () => {
    const btn = this.scrollBtn.current;
    const scrollValue = document.documentElement.scrollTop;
    this.props.onChangeScroll(scrollValue);

    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  scrollToPost = (refs, id) => {
    const value = parseInt(id);
    if (Number.isInteger(value) && value <= 15) {
      refs[id].current.scrollIntoView({
        behaviour: "smooth",
        block: "start"
      });
    } else {
      this.setState(prevState => {
        return {
          isError: !prevState.isError
        };
      });
    }
  };

  toggleError = () => {
    this.setState(prevState => {
      return {
        isError: !prevState.isError
      };
    });
  };

  render() {

    let ids = [];

    this.props.posts.map(post => {
      ids.push(post.id);
      return ids;
    });

    const refs = ids.reduce((acc, value) => {
      acc[value] = React.createRef();
      return acc;
    }, {});
  
    return this.props.posts.length !== 0 ? (
      <div className={classes.PostsWrapper}>
        <div className={classes.SearchPanelWrapper}>
          <div className={classes.SearchPanel}>
            <input
              type="text"
              placeholder={`Enter post id 1 to ${this.props.posts.length}`}
              value={this.state.input}
              onChange={event => this.inputHandler(event)}
            />
            <div
              onClick={() => {
                this.scrollToPost(refs, this.state.input)
                this.setState({input: ''})
              }
              }
            >
              Find
            </div>
          </div>
          {this.state.isError ? (
            <SearchError
              amount={this.props.posts.length}
              class={classes.SearchError}
              expire={this.toggleError}
            />
          ) : null}
        </div>
        <div className={classes.PostsContent}>
          {this.props.posts.map((item, idx) => {
            return (
              <PostAux
                key={item.id}
                class={classes.PostWrapper}
                ref={refs[item.id]}
              >
                <Post
                  id={item.id}
                  url={item.url}
                  title={item.title}
                  text={item.body}
                  refer={item.id}
                  class={PostClasses}
                  path={'/post/' + item.id}
                />
              </PostAux>
            );
          })}
          <div
            className={classes.ToTop}
            ref={this.scrollBtn}
            onClick={this.scrollToTop}
          >
            <img src={topArrow} alt="scroll to top" />
          </div>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    scrollPosition: state.posts.scrollPosition
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts()),
    onChangeScroll: position => dispatch(actions.getScrollPosition(position))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
