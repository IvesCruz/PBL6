function pegarValor(){
	var primeiroSeis = document.getElementById("primeiroSeis").value 
	var segundoSeis = document.getElementById("segundoSeis").value 
	var terceiroSeis = document.getElementById("terceiroSeis").value 

	var primeiroNove = document.getElementById("primeiroNove").value 
	var segundoNove = document.getElementById("segundoNove").value 
	var terceiroNove = document.getElementById("terceiroNove").value 

	var primeiroDoze = document.getElementById("primeiroDoze").value 
	var segundoDoze = document.getElementById("segundoDoze").value 
	var terceiroDoze = document.getElementById("terceiroDoze").value 

	var primeiroQuinze = document.getElementById("primeiroQuinze").value 
	var segundoQuinze = document.getElementById("segundoQuinze").value 
	var terceiroQuinze = document.getElementById("terceiroQuinze").value 

	var primeiroDezoito = document.getElementById("primeiroDezoito").value 
	var segundoDezoito = document.getElementById("segundoDezoito").value 
	var terceiroDezoito = document.getElementById("terceiroDezoito").value 

	var primeiroVinteum = document.getElementById("primeiroVinteum").value 
	var segundoVinteum = document.getElementById("segundoVinteum").value 
	var terceiroVinteum = document.getElementById("terceiroVinteum").value 

	var seisHoras = []
	var seis = {primeiroSeis:primeiroSeis, segundoSeis: segundoSeis, terceiroSeis:terceiroSeis}
	seisHoras.push(seis)

	var noveHoras = []
	var nove = {primeiroNove: primeiroNove, segundoNove: segundoNove, terceiroNove: terceiroNove}
	noveHoras.push(nove)

	var dozeHoras = []
	var doze = {primeiroDoze: primeiroDoze, segundoDoze: segundoDoze, terceiroDoze: terceiroDoze}
	dozeHoras.push(doze)

	var quinzeHoras = []
	var quinze = {primeiroQuinze: primeiroQuinze, segundoQuinze: segundoQuinze, terceiroQuinze: terceiroQuinze}
	quinzeHoras.push(quinze)

	var dezoitoHoras = []
	var dezoito = {primeiroDezoito: primeiroDezoito, segundoDezoito: segundoDezoito, terceiroDezoito: terceiroDezoito}
	dezoitoHoras.push(dezoito)

	var vinteumHoras = []
	var vinteum = {primeiroVinteum: primeiroVinteum, segundoVinteum: segundoVinteum, terceiroVinteum: terceiroVinteum}
	vinteumHoras.push(vinteum)
	
	
	for(var i = 0; i < seisHoras.length; i++){

		seisRand = Math.floor((Math.random() * 3) + 1);
		noveRand = Math.floor((Math.random() * 3) + 1);
		dozeRand = Math.floor((Math.random() * 3) + 1);
		quinzeRand = Math.floor((Math.random() * 3) + 1);
		dezoitoRand = Math.floor((Math.random() * 3) + 1);
		vinteUmRand = Math.floor((Math.random() * 3) + 1);
	 	
	 	if(seisRand === 1){
	 		document.getElementById("seis").innerHTML = seisHoras[i].primeiroSeis
	 	}else if(seisRand === 2){
	 		document.getElementById("seis").innerHTML = seisHoras[i].segundoSeis
	 	}else if(seisRand === 3){
			document.getElementById("seis").innerHTML = seisHoras[i].terceiroSeis
 		}

 		if(noveRand === 1){
 			document.getElementById("nove").innerHTML = noveHoras[i].primeiroNove
 		}else if(noveRand === 2){
 			document.getElementById("nove").innerHTML = noveHoras[i].segundoNove
 		}else if(noveRand === 3){
 			document.getElementById("nove").innerHTML = noveHoras[i].terceiroNove
 		}

 		if(dozeRand === 1){
 			document.getElementById("doze").innerHTML = dozeHoras[i].primeiroDoze
 		}else if(dozeRand === 2){
 			document.getElementById("doze").innerHTML = dozeHoras[i].segundoDoze
 		}else if(dozeRand === 3){
 			document.getElementById("doze").innerHTML = dozeHoras[i].terceiroDoze
 		}

 		if(quinzeRand === 1){
 			document.getElementById("quinze").innerHTML = quinzeHoras[i].primeiroQuinze
 		}else if(quinzeRand === 2){
 			document.getElementById("quinze").innerHTML = quinzeHoras[i].segundoQuinze
 		}else if(quinzeRand === 3){
 			document.getElementById("quinze").innerHTML = quinzeHoras[i].terceiroQuinze
 		}

 		if(dezoitoRand === 1){
 			document.getElementById("dezoito").innerHTML = dezoitoHoras[i].primeiroDezoito
 		}else if(dezoitoRand === 2){
 			document.getElementById("dezoito").innerHTML = dezoitoHoras[i].segundoDezoito
 		}else if(dezoitoRand === 3){
 			document.getElementById("dezoito").innerHTML = dezoitoHoras[i].terceiroDezoito
 		}

 		if(vinteUmRand === 1){
 			document.getElementById("vinteum").innerHTML = vinteumHoras[i].primeiroVinteum
 		}else if(vinteUmRand === 2){
 			document.getElementById("vinteum").innerHTML = vinteumHoras[i].segundoVinteum
 		}else if(vinteUmRand === 3){
 			document.getElementById("vinteum").innerHTML = vinteumHoras[i].terceiroVinteum
 		}
	 }	 
}