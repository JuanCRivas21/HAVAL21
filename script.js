         let formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", function(event){

            event.preventDefault();

            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let correo = document.getElementById("correo").value;
            let password = document.getElementById("password").value;

            if(nombre == "" || apellido == "" || correo == "" || password == ""){
                alert("Complete todos los campos");
                return;
            }

            if(correo.includes("@") && correo.includes(".")){
                alert("Registro realizado correctamente");
            }else{
                alert("El correo no es válido");
            }

        });
