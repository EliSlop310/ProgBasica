function mostrar() {
 document.getElementById('ContenidoB').style.display="block";
}

function validaFechaMenor(campo){
		var bRet = false;
		var dHoy = new Date();
		var dCapt = null;
		if (campo.value == "")
			alert("Faltan datos");
		else{
			dCapt = validaFecha(campo.value);
			if (dCapt != null && dCapt < dHoy)
				bRet = true;
			else
				alert("La fecha debe ser menor a la fecha actual");
		}
		return bRet;
	}

	/*Convierte una cadena a un objeto Date bajo formato dd/mm/aaaa,
		si no corresponde al formato regresa null*/
	function validaFecha(valor){
		var dConvertida = null;
		var sAnio = "";
		var sMes = "";
		var sDia = "";
		var nAnio=0, nMes=0, nDia = 0;
            //-----0123 4 56 7 89
            //-----1998 - 10 - 24
            //-----24   / 10 / 1998
            var pos= valor.split("");
            var fecInver=pos[8]+pos[9]+"/"+pos[5]+pos[6]+"/"+pos[0]+pos[1]+pos[2]+pos[3];
            valor=fecInver;
        
        
        
		if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
			nDia = parseInt(valor.substring(0,2), 10);
			nMes = parseInt(valor.substring(3,5), 10);
			nAnio = parseInt(valor.substring(6,10), 10);
            
            
			if (nDia <1 || nDia>31)
				alert("El día no es válido")
			else{
				if (nMes <1 || nMes>12)
					alert("El mes no es válido");
				else{
					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
						 alert("El mes tiene máximo 31 días");
					else if ((nMes==4 || nMes==6 || nMes==9 ||
								nMes==11) && nDia > 30)
						 alert("El mes tiene máximo 30 días");
					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
						 alert("Febrero tiene 28 días o 29 en bisiesto");
					else{
						dConvertida = new Date();
						dConvertida.setFullYear(nAnio, nMes-1, nDia);
                        creasigno(nDia,nMes);
					}//fin validaci�n día-mes
				}//mes válido
			}//día válido
		}//formato válido
		else{
			alert("No tiene formato de fecha");
		}
		return dConvertida;
	}


        function creasigno(nDia,nMes){
        var a="";
        //var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
           document.getElementById("Resultado").innerHTML = "Signo:  ARIES<br> N° de la Suerte: 5<br>Color: Rojo";
            a="#FF0000";

        }
            
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          document.getElementById("Resultado").innerHTML = "Signo:  TAURO<br> N° de la Suerte:12 <br>Color:Verde";
            a="#00FF00";
        }
          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
             document.getElementById("Resultado").innerHTML = "Signo:  GEMINIS<br> N° de la Suerte:3 <br>Color:Amarillo";
            a="#FFFF00";
          }
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
               document.getElementById("Resultado").innerHTML = "Signo:  CANCER<br> N° de la Suerte:2 <br>Color:Blanco";
            a="#FFFFFF";
            }
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                 document.getElementById("Resultado").innerHTML = "Signo:  LEO<br> N° de la Suerte:9 <br>Color:Naranja";
            a="#FFA500";
              }
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                   document.getElementById("Resultado").innerHTML = "Signo:  VIRGO<br> N° de la Suerte:17 <br>Color:Marron";
                    document.getElementById("Resultado").style="Color:#FFFFFF;";
            a="#8B4513";
                }
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                     document.getElementById("Resultado").innerHTML = "Signo:  LIBRA<br> N° de la Suerte:6 <br>Color:Rosa";
            a="#FFC0CB";
                  }
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      document.getElementById("Resultado").innerHTML = "Signo:  ESCORPIO<br> N° de la Suerte:8 <br>Color:Vino";
                        document.getElementById("Resultado").style="Color:#FFFFFF;";
            a="#8B0000";
                    }
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                         document.getElementById("Resultado").innerHTML = "Signo:  SAGITARIO<br> N° de la Suerte:4 <br>Color:Magenta";
            a="#FF00FF";
                      }
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                           document.getElementById("Resultado").innerHTML = "Signo:  CAPRICORNIO<br> N° de la Suerte:23 <br>Color:Negro";
                            document.getElementById("Resultado").style="Color:#FFFFFF;";
            a="#000000";
                        }
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                             document.getElementById("Resultado").innerHTML = "Signo:  ACUARIO<br> N° de la Suerte:0 <br>Color:Gris";
                            document.getElementById("Resultado").style="Color:#FFFFFF;";
            a="#808080";
                          }
                            else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                             document.getElementById("Resultado").innerHTML = "Signo:  PICIS<br> N° de la Suerte:7 <br>Color:Violeta";
            a="#800080";
                                document.getElementById("Resultado").style="Color:#FFFFFF;";
                            }

        
        document.getElementById("Signos").style="border: 3px solid #999999; background-color:"+a+"; width: 200px ;height:300px ;";    
        
}

