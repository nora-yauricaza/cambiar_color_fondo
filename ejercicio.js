	window.addEventListener("load", function() {
		var boton = document.getElementById("calcular");
		boton.addEventListener("click", function() {		
			var segundos = document.getElementById("segundos").value;
			setInterval(callback, segundos*1000);
		});
	});
		function callback(){
		document.body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
		}
