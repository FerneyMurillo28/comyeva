import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../App.css";
import Logo from "../images/SenaLogo.png";
import ImagenSena from "../images/sena.jpg";

const SplashScreen = () => {
  return (
    <div style={styles.splashContainer}>
      <Container fluid>
        <Row>
          <Col md={8} style={styles.leftColumn}>
            <div style={styles.welcomeContainer}>
              <Image src={Logo} alt="Logo del SENA" style={styles.logo} />
              <h1>Bienvenido al Sistema de Comités y Evaluación del SENA</h1>
              <p>
                Facilitando la gestión y evaluación de tus comités de manera
                eficiente.
              </p>
            </div>
            <div style={styles.alusiveMessages}>
              <p>Comprometidos con la excelencia.</p>
              <p>Innovando para tu crecimiento.</p>
              <p>Evaluando para mejorar.</p>
            </div>
          </Col>
          <Col md={4} style={styles.rightColumn}>
            <Image
              src={ImagenSena}
              alt="Imagen del SENA"
              style={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const styles = {
  splashContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to bottom right, white 50%, #d4edda 50%)",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
  },
  welcomeContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "150px",
    height: "auto",
    marginBottom: "20px",
  },
  alusiveMessages: {
    textAlign: "center",
    marginTop: "20px",
  },
  rightColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxHeight: "80vh",
    width: "100%",
    objectFit: "cover",
  },
};

export default SplashScreen;
