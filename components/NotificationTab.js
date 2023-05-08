import React from "react";
import { Link } from "react-router-dom";

const NotificationTab = () => {
  return (
    <div>
      <Link to="/notificationList">
        <button>💭</button>
      </Link>
    </div>
  );
};

export default NotificationTab;
