import React from "react";
import { FaEnvelope, FaFax, FaPhoneAlt } from "react-icons/fa";

const PhoneNumber = () => {
  return (
    <div className="phoneNumber">
      <span>
        <FaPhoneAlt />
        (060) 444 434 444
      </span>
      <span>
        <FaFax />
        (060) 555 545 555
      </span>
      <span>
        <FaEnvelope />
        chat@simone.com
      </span>
    </div>
  );
};

export default PhoneNumber;
