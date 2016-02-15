window.onload = function()
{
var areaCirc;
var areaCuad;
var areaTran;
    
// FUNCIONES DEL BOTON CALCULAR
 nom_div("calcular").addEventListener('click', function(event)
 {

  if(nom_div("radio").value!="")
  {
   var radio = nom_div("radio").value;
   areaCirc = Math.pow(radio,2)*Math.PI;
   nom_div("textDiv").innerHTML ="Respuesta :" + (areaCirc);
   }
   else
    {
     alert("INGRESE EL VALOR DEL RADIO :");
     }
     });
// FUNCIONES DEL BOTON LIMPIAR
 nom_div("limpiar").addEventListener('click', function(event)
    {  
           nom_div("textDiv").innerHTML = "";
           nom_div("radio").innerHTML = "";
                      	
     });

// FUNCIONES DEL BOTON CALCULAR AREA CUADRADO
 nom_div("calcularCuadrado").addEventListener('click', function(event)
 {

  if(nom_div("lado").value!="")
  {
   var lado = nom_div("lado").value;
   areaCuad = Math.pow(lado,2);
   nom_div("textDiv1").innerHTML = "Respuesta :" + (areaCuad);
   }
   else
    {
     alert("INGRESE EL VALOR DE UNO DE LOS LADOS :");
     }
     });
// FUNCIONES DEL BOTON LIMPIAR 
 nom_div("limpiar1").addEventListener('click', function(event)
    {  
           nom_div("textDiv1").innerHTML = "";
           nom_div("lado").innerHTML = "";
                      	
     });

nom_div("calcularTriangulo").addEventListener('click', function(event)
 {

  if((nom_div("base").value!="") && (nom_div("altura").value!=""))
  {
   var base = nom_div("base").value;
   var altura = nom_div("altura").value;
   areaTran = (base*altura)/2;
   nom_div("textDiv2").innerHTML = "Respuesta :" + (areaTran);
   }
   else
    {
     alert("INGRESE LA BASE Y LA ALTURA :");
     }
     });
// FUNCIONES DEL BOTON LIMPIAR 
 nom_div("limpiar2").addEventListener('click', function(event)
    {  
           nom_div("textDiv2").innerHTML = "";
           nom_div("base").innerHTML = "";
           nom_div("altura").innerHTML = "";
                      	
     });



















     function nom_div(div)
	 {
		return document.getElementById(div);
    }

}