import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import Index from "./components/index";
import SplashScreen from "./components/splashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: "", rol: "" });

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
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  });

  const handleLoginSuccess = (name, rol) => {
    setIsAuthenticated(true);
    const userData = { name, rol };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ name: "", rol: "" });
    localStorage.removeItem("user");
    Toast.fire({
      icon: "error",
      title: "Usuario desconectado",
    });
  };

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <Index
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={handleLogout}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;
