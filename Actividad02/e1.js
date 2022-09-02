document.getElementById("precio").focus();

var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");

function Compra()
{
    return parseInt(precio.value)*parseInt(cantidad.value);
}

function Descuento()
{
    console.log(Compra());
    if (Compra()>10) {
        return 15/100 * Compra();
    }
    else
    {
        return 5/100 * Compra();
    }
}

function Pagar()
{
    console.log(Compra());
    console.log(Descuento());
    return Compra() - Descuento();
}

function Obsequio()
{
    console.log(Compra());
    if (Compra()>200) {
        return msg = "Te has ganado una agenda!";
    }
    else
    {
        return msg = "Te has ganado un cuaderno!";
    }
}

function Imprimir()
{
    console.log(Compra());
    console.log(Descuento());
    console.log(Pagar());
    console.log(Obsequio());

    document.getElementById('resultado').value= "El importe de compra es: "+Compra()+"\n"+"El descuento es: "+Descuento()+"\n"+"El importe a Pagar es: "+Pagar()+"\n"+"El Obsequio es: "+Obsequio()+"\n";

    cantidad.value = "";
    precio.value = "";
    precio.focus;
    return false;
}

