import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const LoginButton = ({ onLoginSuccess }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [codeRequested, setCodeRequested] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRequestCode = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/usuarios-login?email=${email}"
      );
      if (response.ok) {
        const user = await response.json();
        if (user) {
          setMessage("codigo de verificacion enviado");
          setCodeRequested(true);
          console.log("simulacion correo ${email}: ${user.verificationCode}");
        } else {
          setMessage("correo no encontrado");
        }
      } else {
        setMessage("Error en solicitud");
      }
    } catch (error) {
      setMessage("Error al iniciar sesión.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/usuarios-login?email=${email}&verificationCode=${verificationCode}"
      );
      if (response.ok) {
        const user = await response.json();
        if (user) {
          setMessage("Inicion de sesion exitoso");
          setShowModal(false);
          onLoginSuccess(user.name, user.rol);
          console.log("inicio exitoso");
        } else {
          setMessage("Correo o codigo incorrecti");
        }
      } else {
        setMessage("Error en la solicitud");
      }
    } catch (error) {
      setMessage("Error");
      console.log("No hay respuesta", error);
    }
  };

  return (
    <>
      <div>
        <Button variant="dark" onClick={toggleModal}>
          Login
        </Button>
        <Modal show={showModal} onHide={toggleModal} className="login-menu">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              {codeRequested && (
                <Form.Group controlId="formBasicVerificationCode">
                  <Form.Label>Codigo de verificacion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el codigo"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </Form.Group>
              )}
            </Form>
            {message && <p>{message}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={toggleModal}>
              Cerrar
            </Button>
            {!codeRequested ? (
              <Button variant="dark" onClick={handleRequestCode}>
                Solicitar Codigo
              </Button>
            ) : (
              <Button variant="dark" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default LoginButton;
