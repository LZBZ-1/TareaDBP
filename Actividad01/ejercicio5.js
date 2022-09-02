document.getElementById("precio").focus();

var precio = document.getElementById("precio");

function sueldoBasico()
{
    return 350.75;
}

function comision()
{
    return 5/100*parseInt(precio.value);
}

function sueldoBruto()
{
    console.log(sueldoBasico());
    console.log(comision);
    return sueldoBasico() + comision();
}

function descuento()
{
    console.log(sueldoBruto());
    return 15/100*sueldoBruto();
}

function sueldoNeto()
{
    console.log(sueldoBruto());
    console.log(descuento());
    return sueldoBruto() - descuento();
}

function Procesar()
{
    console.log(sueldoBasico());
    console.log(sueldoBruto());
    console.log(comision());
    console.log(descuento());
    console.log(sueldoNeto());

    document.getElementById('resultado').value="BOLETA DEL VENDEDOR: "+"\n"+"Sueldo basico: "+sueldoBasico()+"\n"+"Comision: "+comision()+"\n"+"Sueldo Bruto: "+sueldoBruto()+"\n"+"Descuento: "+descuento()+"\n"+"Sueldo Neto: "+sueldoNeto()+"\n";

    precio.value = "";
    precio.focus;
    return false;
}