
function funciona(valor) {

        var validacion = true;
        mensaje = "Tienes que escribir \n";

        for (i = 0; i < valor.length-1; i++) {

            if (((tamanio(valor.elements[i].value, 3)) == false)) {
                mensaje += valor.elements[i].id;
                validacion = false;
                break;
            }

        }
        if (validacion == false) {
            alert(mensaje);
            
            return false;
        }
        return true;
    }