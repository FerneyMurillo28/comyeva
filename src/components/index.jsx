import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoMenu } from "react-icons/io5";
import ContentAbo from "./Abogada/contentAbo";
import ContentAbo2 from "./Abogada/contentAbo2";
import ContentCoor from "./Coordinador/contentCoor";
import ContentCoor2 from "./Coordinador/contentCoor2";
import ContentIns from "./Instructor/contentins";
import ContentIns2 from "./Instructor/contentins2";
import Content from "./Principal/content";
import Content2 from "./Principal/content2";
import Content3 from "./Principal/content3";
import LoginButton from "./login";
import MenuAbo from "./menuAbo";
import MenuCoordi from "./menuCoordi";
import MenuIns from "./menuInst";
import MenuPrin from "./menuprin";
import NotificationButton from "./notificaciones";

const Index = ({ isAuthenticated, user, onLogout, onLoginSuccess }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const [selectedContent, setSelectedContent] = useState("content");
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  const handleCloseMenu = () => {
    setMenuOn(false);
  };

  const handleContentChange = (content) => {
    setSelectedContent(content);
    handleCloseMenu();
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOn(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  const renderMenu = () => {
    if (!isAuthenticated) {
      return (
        <MenuPrin
          onClose={handleCloseMenu}
          onContentChange={handleContentChange}
        />
      );
    }
    switch (user.rol) {
      case "coordinador":
        return (
          <MenuCoordi
            onClose={handleCloseMenu}
            onContentChange={handleContentChange}
          />
        );
      case "instructor":
        return (
          <MenuIns
            onClose={handleCloseMenu}
            onContentChange={handleContentChange}
          />
        );
      case "abogada":
        return (
          <MenuAbo
            onClose={handleCloseMenu}
            onContentChange={handleContentChange}
          />
        );
        dafault: return (
          <MenuPrin
            onClose={handleCloseMenu}
            onContentChange={handleContentChange}
          />
        );
    }
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "content":
        return <Content />;
      case "content2":
        return <Content2 />;
      case "content3":
        return <Content3 />;
      case "contentCoor":
        return <ContentCoor />;
      case "contentCoor2":
        return <ContentCoor2 />;
      case "contentIns":
        return <ContentIns />;
      case "contentIns2":
        return <ContentIns2 />;
      case "contentAbo":
        return <ContentAbo />;
      case "contentAbo2":
        return <ContentAbo2 />;
      default:
        return <Content />;
    }
  };

  const renderAuthButton = () => {
    if (isAuthenticated) {
      return (
        <Dropdown>
          <Dropdown.Toggle variant="outline-light">{user.name}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText>{user.name}</Dropdown.ItemText>
            <Dropdown.ItemText>{user.rol}</Dropdown.ItemText>
            <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return <LoginButton onLoginSuccess={onLoginSuccess} />;
  };

  return (
    <div>
      <div
        ref={menuRef}
        className={`menu-desplegable ${menuOn ? "abierto" : "cerrado"}`}
      >
        {renderMenu()}
      </div>
      <Navbar expand="lg" className=" custom-navbar navbar-color" sticky="top">
        <Container>
          <Navbar.Brand
            href="#"
            onClick={toggleMenu}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoMenu
              style={{ fontSize: "50px", color: "#212529" }}
              className={isHovered ? "icon-hovered" : ""}
            />
          </Navbar.Brand>
          <div className="normal-screen">
            <NotificationButton />
          </div>
          {renderAuthButton()}
        </Container>
      </Navbar>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Index;
