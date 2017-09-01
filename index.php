<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<title>sorteio</title>
</head>
<body>
<main class="container">
<header>
<div class="push"></div>
<div class="fonte">
<p> Alunos : Lenilson Madureira, Daiana e Ticiano</p>

</div>
	<p class ="fonte" id="titulo"> Sorteando</p>
</header>
<section class="box-form">	
	<form class="formulario" onsubmit="sorte();">
		
		<input class= "" type="number" id="x1" required>
		<input class= "" type="number" id="x2" required>
		<p></p>
		<input type="number" id="y">
		<button class="botao"> Sortear</button>
	</form>

	<ul class="label">
		<li class="" id="intervalo"> Intervalo:</li>
		<li> exclusão:</li>
	</ul>

</section>

<section class="resultados">

<p class="fonteBlack" id="labelExcluir"> Exclusões:</p>


<p class="fonteBlack" id="labelSorte"> Sorteados:</p>

<div class="fonteVermelha" id="excluidos"></div>
<div class="fonteVerde" id="sorteados"></div>

<div class="fonte" id="novoSorteado"></div>
</section>

<button class="botao" id="botao-novo" onclick="novo();"> Novo</button>

</main>



	<script src="js/scriptSorte.js"></script>
	<script src="js/jquery.min.js"></script>	
</body>
</html>