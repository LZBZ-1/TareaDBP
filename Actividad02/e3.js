document.getElementById("nota1").focus();

var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");

function promedioFinal()
{
    return parseInt(nota1.value)*20/100+parseInt(nota2.value)*35/100+parseInt(nota3.value)*45/100;
}

function aprobarCurso()
{
    console.log(promedioFinal());
    if (promedioFinal()>13) {
        return msg = "CURSO APROBADO";
    }
    else
    {
        return msg = "CURSO DESAPROBADO";
    }
}

function Procesar()
{
    console.log(promedioFinal());
    console.log(aprobarCurso());

    document.getElementById('resultado').value="El promedio final es: "+promedioFinal()+"\n"+"La condicion es: "+aprobarCurso()+"\n";

    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    nota3.focus;
    return false;
}