import React from "react";

export default function Header({ currentUser, handleLogout }) {
  return (
    <div className="header">
      <div className="m10">{currentUser.email}</div>
      <div>
        <button onClick={handleLogout} className="m10">Logout</button>
      </div>
    </div>
  );
}
