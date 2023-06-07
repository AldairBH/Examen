const television = {
    encender:false,
    volumen:3,
    canal:7,
    silenciar:false
}
let anterior =3;

function prender() {
    if (television.encender) {
        television.encender = false;
        television.canal = 7;
        television.volumen = 3;

        console.log("Television apagada")
    }
    else{
        television.encender = true;
        television.canal = 7;
        television.volumen = 3;
        console.log("Television encendida")
        console.log("Television con volumen nivel: " + television.volumen)
        console.log("Canal numero: " + television.canal)
    }
}

function subirVolumen() {

    if (television.encender) {
        television.silenciar = false;
        if (television.volumen < 10) {
            television.volumen = television.volumen+1;
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
        else{
            console.log("Television encendida")
            console.log("Volumen al maximo: " + television.volumen);
            console.log("Canal numero: " + television.canal)
        }
    }
    else{
        console.log("Encienda la television primero, por favor")
        //alert('Encienda la television primero, por favor')
    }
}

function bajarVolumen() {

    if (television.encender) {
        television.silenciar = false;
        if (television.volumen > 1) {
            television.volumen = television.volumen-1;
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
        else{
            console.log("Television encendida")
            console.log("Volumen al minimo: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
    }
    else{
        console.log("Encienda la television primero, por favor")
        //alert('Encienda la television primero, por favor')
    }
}

function subirCanal() {

    if (television.encender) {
        if (television.canal < 100) {
            television.canal = television.canal+1;
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
        else{
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal al maximo: " + television.canal)
        }
    }
    else{
        console.log("Encienda la television primero, por favor")
        //alert('Encienda la television primero, por favor')
    }
}

function bajarCanal() {

    if (television.encender) {
        if (television.canal > 1) {
            television.canal = television.canal-1;
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
        else{
            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal al minimo: " + television.canal)
        }
    }
    else{
        console.log("Encienda la television primero, por favor")
        //alert('Encienda la television primero, por favor')
    }
}

function mutear() {
    if (television.encender) {
        
        if (television.silenciar) {
            television.silenciar = false;
            television.volumen = anterior;

            console.log("Television encendida")
            console.log("Television con volumen nivel: " + television.volumen)
            console.log("Canal numero: " + television.canal)
        }
        else{
            anterior = television.volumen;
            television.silenciar = true;
            television.volumen = 0;
            console.log("Television encendida")
            console.log("Television muteada")
            console.log("Canal al minimo: " + television.canal)
        }

    }
    else{
        console.log("Encienda la television primero, por favor")
        //alert('Encienda la television primero, por favor')
    }
}
