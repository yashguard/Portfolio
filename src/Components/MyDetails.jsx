import React from "react";
import Address from "./Address";
import FollowMe from "./FollowMe";
import PhoneNumber from "./PhoneNumber";

const MyDetails = () => {
  return (
    <div className="details">
      <Address />
      <PhoneNumber />
      <FollowMe />
    </div>
  );
};

export default MyDetails;
