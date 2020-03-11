import React from "react";

class SearchError extends React.Component {

constructor (props) {
    super(props);

    this.SearchErrorModal = React.createRef();
}

componentDidMount () {
    setTimeout(() => {
        this.SearchErrorModal.current.style.display = "none";
        this.props.expire();
    }, 2000)
}

render () {
  return (
    <div className={this.props.class} ref={this.SearchErrorModal}>
      <span>Enter number in range from 1 to 15</span>
    </div>
  );
};
}

export default SearchError;
