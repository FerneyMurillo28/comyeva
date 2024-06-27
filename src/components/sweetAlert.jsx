import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SwalWithReactContent = withReactContent(Swal);

const showLoginForm = (codeRequested) => {
  return SwalWithReactContent.fire({
    title: "Login",
    html: `
      <input type="email" id="email" class="swal2-input" placeholder="Email">
      ${
        codeRequested
          ? '<input type="password" id="password" class="swal2-input" placeholder="Password">'
          : ""
      }
    `,
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector("#email").value;
      const password = codeRequested
        ? Swal.getPopup().querySelector("#password").value
        : null;
      if (!email || (codeRequested && !password)) {
        Swal.showValidationMessage(
          `Please enter email ${codeRequested ? "and password" : ""}`
        );
      }
      return { email, password };
    },
    showCancelButton: true,
    confirmButtonText: codeRequested ? "Login" : "Request Code",
    cancelButtonText: "Cancel",
  });
};

export { showLoginForm };
