import React, { useState } from "react";
import { Badge, Button, Dropdown } from "react-bootstrap";
import { BsBell } from "react-icons/bs";

const NotificationButton = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
    { id: 3, text: "Notification 3" },
    { id: 4, text: "Notification 4" },
  ]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Dropdown>
        <Dropdown.Toggle as={Button} variant="dark">
          <BsBell />
          <Badge bg="danger">{notifications.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu show={showNotifications}>
          {notifications.map((notification) => (
            <Dropdown.Item key={notification.id}>
              {notification.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NotificationButton;
