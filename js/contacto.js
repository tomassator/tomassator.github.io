function validarForm(){


    var nombre = document.getElementById("nombre").value.trim()
    var apellido = document.getElementById("apellido").value.trim()
    var correo = document.getElementById("correo").value.trim()
    var telefono = document.getElementById("telefono").value.trim()
    var club = document.getElementById("club").value.trim()
    var motivos = document.getElementById("motivos").value.trim()
    var descripcion = document.getElementById("descripcion").value.trim()

    // verificar que ningun campoe este en blanco

    // validacion del formulario

    
   var variables = [nombre,apellido,correo,telefono,club,motivos,descripcion]

   for (indice in variables){
       if (variables[indice] === ""){
           alert("Complete todos los campos del formulario antes de enviarlo")
           return false
       } else if(variables[indice] == "Seleccione una opcion de la lista"){
            alert("Indique el motivo de su consulta")
            return false
       }
   }   


    // validar que el nombre contenga solo caracteres y espacios
    for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
    }

    // validar que el apellido contenga solo caracteres y espacios
    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
    }

    // validar que el telefono no contenga caracteres de tipo texto

    numeros_validos = "0123456789"
    for(numero in telefono){
        if(!numeros_validos.includes(telefono[numero])){
            alert("Solo puede ingresar caracteres numericos en el campo telefono")
            return false
        }
    }



    // Mensaje de confirmacion de formulario

    alert("Formulario enviado correctamente")
    return true




  }



  

