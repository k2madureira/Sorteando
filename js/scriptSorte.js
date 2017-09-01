
var excluidos = [];
var sorteados = [];
var cont =0;

function msgErro(){

	var $=document.querySelector.bind(document);
	var msg = $("#erro");
	var erro="Preenchido o campo deve ser. Jovem padawan!";


				    setTimeout(function(){

			            msg.classList.remove("invisivel");
			            msg.textContent = erro;
			        	

			       	},500);
			      	setTimeout(function(){       

			                    clearInterval(erro);
			                    msg.classList.add("invisivel");
			                    msg.textContent='';
			                   
			             },6000);
			      	
}

function sorte(){

	event.preventDefault();

	var campx1 = document.querySelector("#x1");
	var campx2 = document.querySelector("#x2");
	var campy = document.querySelector("#y");
	var campintervalo = document.querySelector("#intervalo");

	var x1 = campx1.value; // A  (a->b) 
	var x2 = campx2.value;//  B
	var y = campy.value; // excluido

	campx1.classList.add("invisivel");
	campx2.classList.add("invisivel");
	campintervalo.classList.add("invisivel");
	

	$.ajax({
		type:"POST",
		url:"php/sorte.php",
		data:{x1:x1,x2:x2,y:y},
		cache:false,
		beforeSend:function(){console.log("sorteando...");},
		success:function(data){

			let busca = buscaSorteado(data);
			let buscaY = buscaExclusoes(y); // busca as exclusões
			let buscaD = buscaExclusoes(data); // busca as exclusões com o DATA

			if(busca == 1 || buscaD == 1){

				sorte(); // recursividade

			}if(busca == 0 && buscaD == 0){

				sorteados.push(data);
				mostraSorte(data);

			}if(buscaY == 0){

				excluidos.push(y);

			}
				mostraExcluidos();
			

			
			
			
			
		}
	});
}

function buscaSorteado(num){

	var resultado = 0;

	for(let i=0; i<=sorteados.length;i++){

		if(sorteados[i] == num){
		   	resultado = 1;
			
		}
	}

	if (resultado == 1){


		return 1;
	}else{
		return 0;
	}

}

function buscaExclusoes(num){

	var resultado = 0;

	for(let i=0; i<=excluidos.length;i++){

		if(excluidos[i] == num){
		   	resultado = 1;
			
		}
	}

	if (resultado == 1){


		return 1;
	}else{
		return 0;
	}
}

function mostraSorte(num){

	var $ = document.querySelector.bind(document);
	var campSorteados = $("#sorteados");
	var campExcluidos = $("#excluidos");
	var campSorte = $("#novoSorteado");

	for(let i=0; i<=sorteados.length;i++){

		
		campSorteados.textContent = sorteados;
		campSorte.textContent = num;
	}
}

function mostraExcluidos(){

	var $ = document.querySelector.bind(document);
	var campExcluidos = $("#excluidos");
	

	for(let i=0; i<=excluidos.length;i++){

		campExcluidos.textContent = excluidos;
	}
}

function novo(){

	window.location.reload();
}