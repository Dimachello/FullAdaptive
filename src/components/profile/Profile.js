import React from 'react';
import classes from './Profile.module.css';
import ProfileForm from './profile-form';

class Profile extends React.Component {
    render () {
        return (
            <div className={classes.ProfileWrapper}>
                <div className={classes.ProfileContent}>
                <ProfileForm />
                </div>
            </div>
        )
    }
}

export default Profile;