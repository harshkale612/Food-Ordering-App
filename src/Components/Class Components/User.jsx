import { useState } from "react";

const User = ({ name }) => {
  const [count1] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user">
      <h1>Name : {name}</h1>
      <h2>Count = {count1}</h2>
      <h2>Count = {count2}</h2>
      <h2>Location : Pandharpur</h2>
      <h3>contact : @akshaymarch7</h3>
    </div>
  );
};

export default User;
