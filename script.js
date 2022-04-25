function criptografar(){
	var texto = document.getElementById("input-text").value.toLowerCase();
	var criptado = texto.replace(/e/igm,"enter");
	var criptado = criptado.replace(/o/igm,"ober");
	var criptado= criptado.replace(/i/igm,"imes");
	var criptado = criptado.replace(/a/igm,"ai");
	var criptado = criptado.replace(/u/igm,"ufat");
	document.getElementById("imgquality").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = criptado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit";
	
}
function descriptografar(){
	var texto = document.getElementById("input-text").value.toLowerCase();
	var criptado = texto.replace(/enter/igm,"e");
	var criptado = criptado.replace(/ober/igm,"o");
	var criptado = criptado.replace(/imes/igm,"i");
	var criptado = criptado.replace(/ai/igm,"a");
	var criptado = criptado.replace(/ufat/igm,"u");
	document.getElementById("imgquality").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = criptado;
	document.getElementById("btn-copiar").style.display = "show";
	document.getElementById("btn-copiar").style.display = "inherit";
}
function copia(){
	var contem = document.querySelector("#texto2");
	contem.select();
	document.execCommand("copy");
	alert("O texto foi copiado!");
	
	
}