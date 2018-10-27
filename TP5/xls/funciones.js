var baseActual = 10;

function pulsacion (n){

var digito = new Array ('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','.');

	switch (n){

		case 0:  case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:

		document.getElementById('Entrada').innerHTML += digito[n];
		break;

		case 17:
		document.getElementById('Entrada').innerHTML = ""; 
		break;

		case 18://BINARIO
			if(document.getElementById('Entrada').innerHTML != ""){ 
				cambioDeBase(baseActual, 2);
				baseActual = 2;
				}	
			BajarOpacidad();
			SubirOpacidad(18);
		break;

		case 19: //OCTAL			
			if(document.getElementById('Entrada').innerHTML != ""){ 
				cambioDeBase(baseActual, 8);
				baseActual = 8;
				}
			BajarOpacidad();
			SubirOpacidad(19); 
		break;

		case 20: //DECIMAL 			
			if(document.getElementById('Entrada').innerHTML != ""){ 
				cambioDeBase(baseActual, 10);
				baseActual = 10;
				}	
			BajarOpacidad();
			SubirOpacidad(20); 
		break;

		case 21: //HEXADECIMAL			
			if(document.getElementById('Entrada').innerHTML != ""){ 
				cambioDeBase(baseActual, 16);
				baseActual = 16;
				}	
			BajarOpacidad();
			SubirOpacidad(21); 
		break;
	default:
	}
}

function BajarOpacidad(){
	var x = document.getElementsByClassName("cBotonSup");
    var y = document.getElementsByClassName("cBotonInf");

	var i, j;
		    for (i = 0; i < x.length; i++) {
			        x[i].style.backgroundColor = "transparent";
			    }
			    for (j = 0; j < y.length; j++) {
				        y[j].style.opacity = "0.2";
				    }

    document.getElementById('cb1').style.opacity = "1";
	document.getElementById('cb0').style.opacity = "1";
	document.getElementById('cbBorrar').style.opacity = "1";
	document.getElementById('cbPunto').style.opacity = "1";
}

function SubirOpacidad(k){

switch (k){
	case 18://Binario
			document.getElementById('cbBIN').style.backgroundColor = "#ff884d";					
	break;
	case 19://Octal
			document.getElementById('cbOCT').style.backgroundColor = "#ff884d";
			document.getElementById('cb2').style.opacity = "1";
			document.getElementById('cb3').style.opacity = "1";
			document.getElementById('cb4').style.opacity = "1";
			document.getElementById('cb5').style.opacity = "1";
			document.getElementById('cb6').style.opacity = "1";
			document.getElementById('cb7').style.opacity = "1";
			document.getElementById('cb8').style.opacity = "1";
	break;
	case 20://Decimal
			document.getElementById('cbDEC').style.backgroundColor = "#ff884d";
			document.getElementById('cb2').style.opacity = "1";
			document.getElementById('cb3').style.opacity = "1";
			document.getElementById('cb4').style.opacity = "1";
			document.getElementById('cb5').style.opacity = "1";
			document.getElementById('cb6').style.opacity = "1";
			document.getElementById('cb7').style.opacity = "1";
			document.getElementById('cb8').style.opacity = "1";
			document.getElementById('cb9').style.opacity = "1";
	break;
	case 21://Hexadecimal
			var x = document.getElementsByClassName("cBotonSup");
		    var y = document.getElementsByClassName("cBotonInf");	
			var i, j;
				    for (i = 0; i < x.length; i++) {
				        x[i].style.backgroundColor = "1";
					    }
						    for (j = 0; j < y.length; j++) {
						        y[j].style.opacity = "1";
						    } 
			document.getElementById('cbHEX').style.backgroundColor = "#ff884d";
	break;
default:
	}
}

window.onresize = function () {
	resizeEntrada();
}

function resizeEntrada(){
var aux = document.getElementById('Entrada');
var aux2 = document.getElementById('cEntrada');

	if(aux.innerHTML != ""){
		var fontsize=10;
			do{
				fontsize++;
				aux.style.font='bold ' + fontsize + 'px "Courier New", Courier, monospace';//APLICADOR DE TAMAÑO PIOLA
				}while(aux2.scrollHeight <= aux2.clientHeight && aux2.scrollWidth <= aux2.clientWidth);

			do{
				fontsize--;
				aux.style.font='bold ' + fontsize + 'px "Courier New", Courier, monospace';	
				}while(aux2.scrollHeight > aux2.clientHeight && aux2.scrollWidth > aux2.clientWidth);
			fontsize -= 2;
			aux.style.font = 'bold ' + fontsize + 'px "Courier New", Courier, monospace';
			aux.style.top = (aux2.clientHeight - aux.clientHeight)/2 + 'px';
	}
}

function cambioDeBase(baseIn, baseOut){
	
	if(baseIn != baseOut){
	var numeroIn = document.getElementById('Entrada').innerHTML;
	var enBase10 = parseInt(numeroIn, baseIn);
	var numeroOut = enBase10.toString(baseOut);

	document.getElementById('Entrada').innerHTML = numeroOut;
	}
}
