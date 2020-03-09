import React from "react";
import Posts from "../../components/posts";
import classes from './Main.module.css';
// import { Route } from 'react-router-dom';
// import PostInfo from '../../components/posts/post-info/PostInfo';

const Main = () => {
  return (
    <div className={classes.MainWrapper}>
      <Posts />
    </div>
  )
};

export default Main;
