import React from "react";
import { FaTools } from "react-icons/fa";

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <FaTools style={styles.icon} />
      <h1>En Construcción</h1>
      <p>Estamos trabajando en esta sección</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    margin: "15px",
  },
  icon: {
    fontSize: "50px",
    marginBottom: "20px",
    color: "#FFA500",
  },
};

export default UnderConstruction;
