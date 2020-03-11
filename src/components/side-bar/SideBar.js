import React from "react";
import classes from "./SideBar.module.css";
import Backdrop from "../backdrop";
import List from "../list/List";
// import { Link } from 'react-router-dom';
import ListItem from "../list/list-item/ListItem";
import LogoPicture from "../../imgs/logo/Logo2.png";

const SideBar = props => {
  const NavItemsList = ["Main", "Profile", "Saved"];
  const path = ["/", "/profile", "/liked"];

  let styles = [classes.SideBar, classes.Close];

  if (props.isShown) {
    styles = [classes.SideBar, classes.Open];
  }

  return props.isShown ? (
    <React.Fragment>
      <div className={styles.join(" ")}>
        <img src={LogoPicture} className={classes.LogoPicture} alt="logo" />
        <List class={classes.SideBarNavList}>
          {NavItemsList.map((item, idx) => {
            return (
              <ListItem
                text={item}
                key={idx}
                path={path[idx]}
                class={classes.SideBarItem}
                click={props.hide}
              />
            );
          })}
        </List>
      </div>
      <Backdrop hide={props.hide} />
    </React.Fragment>
  ) : null;
};

export default SideBar;
