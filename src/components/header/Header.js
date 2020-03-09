import React from 'react';
import classes from './Header.module.css';
import SideBar from '../side-bar';
import UserPanel from '../user-panel';
import Menu from '../../imgs/usr-panel/menu64.png';

class Header extends React.Component {

    state = {
        showSideBar: false
    }

    toggleSideBar = () => {
        this.setState((prevState) => {
            return ({
                showSideBar: !prevState.showSideBar
            })
        })
    }

    render () {
    return (
    <div className={classes.HeaderWrapper}>
        <div className={classes.HeaderContent}>

           <div className={classes.MenuWrapper}>
           <img src={Menu} className={classes.Menu} alt="menu" onClick={this.toggleSideBar}/>
           </div>

           <SideBar isShown={this.state.showSideBar} hide={this.toggleSideBar}/>
           <UserPanel />
        </div>
    </div>
    )
}
}

export default Header;