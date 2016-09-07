window.addEventListener("load", function() {
	var boton = document.getElementById("iniciar");
	boton.addEventListener("click", function() {
		var tiempo = parseInt(document.getElementById("tiempo").value);
		var partida = parseInt(document.getElementById("partida").value);

		contador(tiempo,partida);
		
	});

	function contador(tiempo,partida) {
		setInterval(function(){ 
			document.getElementById("mostrar").innerHTML=partida++; 
		}, tiempo*1000);
	}
	
});