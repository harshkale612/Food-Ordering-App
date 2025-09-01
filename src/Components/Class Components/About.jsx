//import { data } from "react-router-dom";
import User from "./User";
import Userclass from "./Userclass";
import React from "react";

// const About = () => {
//  return (
//     <div className="about">
//       <h1>About Us</h1>
//       <br />
//       <h2>Everyones favourite food app</h2>
//       {/* <br />
//       <User  name={"Harsh (fuctional)"} /> */}
//       <br />
//       <Userclass name={"Harsh (class)"} location={"Pandharpur(class)"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/harshkale612`);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="about">
        <h1>About Us</h1>
        <br />
        <h2>Everyones favourite food app</h2>
        <img src={avatar_url} alt="avatar" />
        <br />
        <Userclass name={name} location={location} />
      </div>
    );
  }
}

export default About;
