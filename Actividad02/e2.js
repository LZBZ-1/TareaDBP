document.getElementById("horasTrabajadas").focus();

var horasTrabajadas = document.getElementById("horasTrabajadas");
var tarifaHoraria = document.getElementById("tarifaHoraria");

function sueldBruto()
{
    return parseInt(horasTrabajadas.value)*parseInt(tarifaHoraria.value);
}

function importeDescuento()
{
    console.log(sueldBruto());
    if (sueldoBruto()>3500) {
        return 15/100 * sueldBruto();
    }
    else
    {
        return 11/100 * sueldBruto();
    }
}

function sueldoNeto()
{
    console.log(sueldBruto());
    console.log(importeDescuento());
    return sueldBruto()-importeDescuento();
}

function Procesar()
{
    console.log(sueldoBruto());
    console.log(importeDescuento());
    console.log(sueldoNeto());

    document.getElementById('resultado').value="El sueldo bruto es: "+sueldBruto()+"\n"+"El descuento es: "+importeDescuento()+"\n"+"El sueldo neto es: "+sueldoNeto()+"\n";

    horasTrabajadas.value = "";
    tarifaHoraria.value = "";
    tarifaHoraria.focus;
    return false;
}


