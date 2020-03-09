import React from 'react';
import classes from './UserPanel.module.css';
import Account from '../../imgs/usr-panel/account.png';
import Gear from '../../imgs/usr-panel/gear.png';
import Global from '../../imgs/usr-panel/global.png'

const Icons = [Account, Gear, Global];

class UserPanel extends React.Component {

    render () {
    return (
        <div className={classes.UserPanel}>
            {Icons.map(icon => {
                return (
                    <img src={icon} className={classes.ControlIcons} alt="icon" key={icon}/>
                )
            })}
        </div>
    );
};
}

export default UserPanel;