import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { IoMdClose } from "react-icons/io";
import NotificationButton from "./notificaciones";

const MenuPrin = ({ onClose, onContentChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContentChange = (content) => {
    onContentChange(content);
    onClose();
  };
  return (
    <div>
      <IoMdClose
        onClick={onClose}
        style={{
          fontSize: "50px",
          color: "#212529",
          margin: "10px",
        }}
        className={isHovered ? "icon-hovered" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className={`d-grid gap-2 button-list`}>
        <Button
          variant="dark"
          className="button-color"
          size="lg"
          onClick={() => handleContentChange("content")}
        >
          Estadisticas
        </Button>
        <Button
          variant="dark"
          className="button-color"
          size="lg"
          onClick={() => handleContentChange("content2")}
        >
          Contenido2
        </Button>
        <Button
          variant="dark"
          className="button-color"
          size="lg"
          onClick={() => handleContentChange("content3")}
        >
          Contenido 3
        </Button>
        <div className="notification-button">
          <NotificationButton />
        </div>
      </div>
    </div>
  );
};
export default MenuPrin;
