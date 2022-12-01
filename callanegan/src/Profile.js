import callanProfile from "./assets/CallanProfile.jpg";
import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className={"profile"}>
        <img src={callanProfile} width={250} alt={"callan-profile"} />
      </div>
    );
  }
}
export default Profile;
