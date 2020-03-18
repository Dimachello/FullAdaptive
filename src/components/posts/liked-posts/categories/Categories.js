import React from 'react';

const Categories = (props) => {
    return (
        <React.Fragment>
            <div className={props.classes.Categories}>
          <div
            className={props.LikedPostsCategory.join(" ")}
            name="LikedPosts"
            onClick={() => {
              if (props.showDeleted) {
                props.hideDeletedPosts();
              } else {
                return 0;
              }
            }}
          >
            Saved
          </div>
          <div
            className={props.DeletedPostsCategory.join(" ")}
            name="DeletedPosts"
            onClick={() => {
              if (props.showDeleted) {
                return 0;
              } else {
                props.showDeletedposts();
              }
            }}
          >
            Deleted
          </div>
          </div>
        </React.Fragment>
    )
}

export default Categories;