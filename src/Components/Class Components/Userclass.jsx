import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="userClass">
        <h1>Name : {name}</h1>
        <h2>Count : {count1}</h2>
        <button className="btn-userclass"
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase Count
        </button>
        {/* <h2>Count : {count2}</h2> */}
        <h2>Location : {location} </h2>
        <h3>contact : @akshaymarch7</h3>
      </div>
    );
  }
}

export default Userclass;
