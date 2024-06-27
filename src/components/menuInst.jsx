import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { IoMdClose } from "react-icons/io";
import NotificationButton from "./notificaciones";

const MenuIns = ({ onClose, onContentChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <IoMdClose
        onClick={onClose}
        style={{
          fontSize: "50px",
          color: "212529",
          margin: "10px",
        }}
        className={isHovered ? "icon-hovered" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="d-grid gap-2 button-list">
        <Button
          variant="dark"
          className="button-color"
          size="lg"
          onClick={() => onContentChange("contentIns")}
        >
          Contenido Instructor 1
        </Button>
        <Button
          variant="dark"
          className="button-color"
          size="lg"
          onClick={() => onContentChange("contentIns2")}
        >
          Contenido Instructor 2
        </Button>
        <div className="notification-button">
          <NotificationButton />
        </div>
      </div>
    </div>
  );
};
export default MenuIns;
