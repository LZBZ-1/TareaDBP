document.getElementById("precio").focus();

var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");

function ImporteCompra()
{
    return parseInt(precio.value)*parseInt(cantidad.value);
}

function ImporteDescuento()
{
    console.log(ImporteCompra());
    return 7/100 * ImporteCompra();
}

function ImporteAPagar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuento());
    return ImporteCompra() - ImporteDescuento();
}

function Incentivo()
{
    return 3 * parseInt(cantidad.value);
}

function Procesar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuento());
    console.log(ImporteAPagar());
    
    document.getElementById('resultado').value="El importe de la compra es: "+ImporteCompra()+"\n"+"El Importe del descuento es: "+ImporteDescuento()+"\n"+"El Importe a pagar es: "+ImporteAPagar()+"\n"+"La cantidad de chocolates recibida es: "+Incentivo()+"\n";

    precio.value = "";
    cantidad.value = "";
    cantidad.focus;
    return false;
}
