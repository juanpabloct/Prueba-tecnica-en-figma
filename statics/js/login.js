const contraseña = document.querySelector("#contraseña");

console.log();
const showPassword = document.querySelector(".showPassword");
showPassword.addEventListener("click", (e) => {
  if (contraseña.type === "password") {
    contraseña.type = "text";
  } else {
    if (contraseña.type === "text") {
      contraseña.type = "password";
    }
  }
});
const email = document.querySelector("#email");
const isValid = document.querySelector(".isValid");
email.addEventListener("keyup", (e) => {
  const entrada = e.target.value;
  if (validator.isEmail(entrada)) {
    isValid.innerHTML = "Email valido";
    isValid.style.color = "#066ca7";
  } else {
    isValid.innerHTML = "Email invalido";
  }
});
