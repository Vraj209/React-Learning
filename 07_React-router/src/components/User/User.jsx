import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-center p-5">
      <h1>User : {userid}</h1>
    </div>
  );
}

export default User;
