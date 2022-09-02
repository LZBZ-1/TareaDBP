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
    return 15/100 * ImporteCompra();
}

function ImporteAPagar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuento());
    return ImporteCompra() - ImporteDescuento();
}

function Procesar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuento());
    console.log(ImporteAPagar());
    document.getElementById('resultado').value= "El importe de compra es: "+ImporteCompra()+"\n"+"El importe del descuento es: "+ImporteDescuento()+"\n"+"El importe a pagar es: "+ImporteAPagar()+"\n";
    
    precio.value = "";
    cantidad.value = "";
    cantidad.focus;
    return false;
}
