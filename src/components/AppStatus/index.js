import React from "react";

import "./AppStatus.scss";

function AppStatus({ label }) {
  return (
    <div className="AppStatus">
      <div className="AppStatus__circle"></div>
      {label}
    </div>
  );
}

export default AppStatus;
