function comenzar(){  

            
        
function palindromo(cadena) {

  var resultado = "La cadena \""+cadena+"\" \n";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");
 
    
    
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios)
    if(letrasEspacios[i] != " ")
          cadenaSinEspacios += letrasEspacios[i];

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras)
    if(letras[i] != letrasReves[i])
         iguales = false;


  if(iguales){  
   document.getElementById("Resultado").innerHTML = " Es un palíndromo";}
  else{
   document.getElementById("Resultado").innerHTML= " No es un palíndromo";}
        
return resultado;
}


//******SE TIENEN QUE EJECUTAR POR SEPARADO PARA QUE LOS MENSAJES APAREZCAN PUESTO QUE
//******LOS ALERT SE EJECUTAN PRIMERO, HACIENDO QUE BORREN LOS MENSAJES ANTERIORES Y 
//******SOLO SE VEA EL ULTIMO
    
alert(palindromo("La ruta nos aporto otro paso natural"));
//alert(palindromo("Esta frase no se parece a ningun palindromo"));
//alert(palindromo("Anita lava la tina"));
//alert(palindromo("EXO tus patrones"));    


     
}