const juridica = document.querySelector("#juridica");
const natural = document.querySelector("#natural");
const formulario = document.querySelector(".formulario");
natural.addEventListener("click", () => {
  if (natural.checked) {
    const formularioCompleto = `        
    <div class="ml-2 form-group w-100">
      <label for="">Nombre</label></br>
        <input type="text" class="form-control "/>
      <label for="">Apellido</label></br>
        <input type="text"  class="form-control"/>
      <label for="">Telefono</label></br>
        <input type="text"  class="form-control"/>
      <label for="">Numero de identificacion</label></br>
        <input type="text"  class="form-control"/>
      <label for="">Email</label></br>
        <input type="email" class="form-control" placeholder="Usuario@yabu.com"/>
      <div class="position-relative">
        <label for="">Confirmar Contraseña</label></br>
          <input type="password" class="form-control contraseña">
          <img src="../statics/img/showPassword.png" alt="" class="showPassword position-absolute"/>
      </div>
      <div class="position-relative mb-3">
        <label for="">Confirmar Contraseña</label></br>
          <input type="password" class="form-control r-contraseña">
          <img src="../statics/img/showPassword.png" alt="" class="r-showPassword position-absolute"/>
      </div>
    </div>`;

    formulario.innerHTML = formularioCompleto;
  }
  const showPassword = document.querySelector(".showPassword");
  const contraseña = document.querySelector(".contraseña");
  const rShowPassword = document.querySelector(".r-showPassword");
  const rContraseña = document.querySelector(".r-contraseña");
  showPassword?.addEventListener("click", () => {
    if (contraseña.type === "password") {
      contraseña.type = "text";
    } else {
      if (contraseña.type === "text") {
        contraseña.type = "password";
      }
    }
  });
  rShowPassword?.addEventListener("click", () => {
    console.log(rContraseña);
    if (rContraseña.type === "password") {
      rContraseña.type = "text";
    } else {
      if (rContraseña.type === "text") {
        console.log("is text");
        rContraseña.type = "password";
      }
    }
  });
});
juridica.addEventListener("click", () => {
  if (juridica.checked) {
    const formularioCompleto = `
    <div class="ml-2 form-group w-100">
      <label for="">Razón social</label></br>
        <input type="text" class="form-control "/>
      <label for="">NIT</label></br>
        <input type="text"  class="form-control"/>
      <label for="">Teléfono</label></br>
        <input type="text"  class="form-control"/>
      <label for="">Email</label></br>
        <input type="email" class="form-control" placeholder="Usuario@yabu.com"/>
      <div class="position-relative">
        <label for="">Confirmar Contraseña</label></br>
          <input type="password" class="form-control contraseña">
          <img src="../statics/img/showPassword.png" alt="" class="showPassword position-absolute"/>
      </div>
      <div class="position-relative mb-3">
        <label for="">Confirmar Contraseña</label></br>
         <input type="password" class="form-control r-contraseña">
         <img src="../statics/img/showPassword.png" alt="" class="r-showPassword position-absolute"/>
      </div>
    </div>`;
    formulario.innerHTML = formularioCompleto;
  }
  const showPassword = document.querySelector(".showPassword");
  const contraseña = document.querySelector(".contraseña");
  const rShowPassword = document.querySelector(".r-showPassword");
  const rContraseña = document.querySelector(".r-contraseña");
  showPassword?.addEventListener("click", () => {
    if (contraseña.type === "password") {
      contraseña.type = "text";
    } else {
      if (contraseña.type === "text") {
        contraseña.type = "password";
      }
    }
  });
  rShowPassword?.addEventListener("click", () => {
    console.log(rContraseña);
    if (rContraseña.type === "password") {
      rContraseña.type = "text";
    } else {
      if (rContraseña.type === "text") {
        console.log("is text");
        rContraseña.type = "password";
      }
    }
  });
});
