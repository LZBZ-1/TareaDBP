document.getElementById("precio").focus();

var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");

function ImporteCompra()
{
    return parseInt(precio.value)*parseInt(cantidad.value);
}

function Descuento1()
{
    console.log(ImporteCompra());
    return 10/100 * ImporteCompra();
}

function Descuento2()
{
    console.log(ImporteCompra());
    console.log(Descuento1());
    return (ImporteCompra()-Descuento1())*10/100;
}

function ImporteDescuentoTotal()
{
    console.log(Descuento1);
    console.log(Descuento2);
    return Descuento1() + Descuento2();
}

function ImporteAPagar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuentoTotal());
    return ImporteCompra() - ImporteDescuentoTotal();
}

function Procesar()
{
    console.log(ImporteCompra());
    console.log(ImporteDescuentoTotal());
    console.log(Descuento1());
    console.log(Descuento2());
    console.log(ImporteAPagar());

    document.getElementById('resultado').value="El importe de la compra es: "+ImporteCompra()+"\n"+"El importe del descuento total es: "+ImporteDescuentoTotal()+"\n"+"El importe a pagar es: "+ImporteAPagar()+"\n";

    precio.value = "";
    cantidad.value = "";
    cantidad.focus;
    return false;
}    
