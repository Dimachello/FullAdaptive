import React from "react";
import "./App.module.css";
import Header from "../header";
import Posts from "../../components/posts";
import LikedPosts from "../posts/liked-posts";
import PostInfo from "../posts/post-info/PostInfo";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post/:id" component={PostInfo} />
        <Route path="/liked" component={LikedPosts} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
