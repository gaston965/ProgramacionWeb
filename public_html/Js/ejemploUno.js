/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function saludar()
{
    
    var nom=document.getElementById("nombre").value;
    if (nom.length !==0)
    {
        alert(' !hola '+ nom + '!Bienvenido/a a la programacion web. ');
         
    }else
    {
        alert('Has olvidado de ingresar tu nombre....')
        
        
        
    }
    
    
    
    
    
    
    
}

function sumar()
{
    var v1 = parseInt(document.getElementById("n1").value);
    var v2 = parseInt(document.getElementById("n2").value);
    var res = v1 + v2;
    var salida = document.getElementById("res");
    
    salida.innerHTML="Resultado :"+ res.toString();
    
    
}

function restar()
{
    var v11 = parseInt(document.getElementById("n11").value);
    var v22 = parseInt(document.getElementById("n22").value);
    var res2 = v11 - v22;
    var salida = document.getElementById("res2");
    
    salida.innerHTML="Resultado :"+ res2.toString();
    
    
}

function dividir()
{
    var v123 = parseInt(document.getElementById("n123").value);
    var v223 = parseInt(document.getElementById("n223").value);
    
    var res3;
    
    if (v223 !== 0)
        res3=v123 / v223;
        else
        res3="no se puede dividir por cero";
    
    var salida = document.getElementById("res3");
    salida.innerHTML="Resultado :" + res3.toString();
    
}


function calcularEdad()
{
    var fecActual= new Date();
    var fecNac = document.getElementById("fecha").value;
    var salida= document.getElementById("edad");
    var valores= fecNac.split("-");
    
    //Fecha de Nacimiento
    var an = valores[0];
    var mn= valores[1];
    var dn= valores[2];
    
    //Fecha actual
    var aa= fecActual.getFullYear();
    var ma= ( fecActual.getMonth()+1 );
    var da= fecActual.getDate();
    
    var edad;
    
    if ( ma < mn || ( ma == mn && da < dn ))
        edad= aa - an -1;
     else
         edad= aa - an;

    salida.innerHTML="Tienes " +edad + " años. ";
    
    
}


 
