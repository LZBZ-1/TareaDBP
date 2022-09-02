document.getElementById("horas").focus();

var hora = documen.getElementById("horas");
var tarifa = document.getElementById("tarifa");

function sueldoBruto()
{
    return parseInt(hora.value)*parseInt(tarifa.value);
}

function Descuento()
{
    console.log(sueldoBruto());
    return 15/100 * sueldoBruto();
}

function sueldoNeto()
{
    console.log(sueldoBruto());
    console.log(Descuento());
    return sueldoBruto() - Descuento();
}

function Procesar()
{
    console.log(sueldoBruto());
    console.log(Descuento());
    console.log(sueldoNeto());

    document.getElementById('resultado').value = "El sueldo Bruto es: "+sueldoBruto()+"\n"+"El descuento es: "+Descuento()+"\n"+"El sueldo neto del empleado es: "+sueldoNeto()+"\n";
    hora.value = "";
    tarifa.value = "";
    tarifa.focus;
    return false;
}


