$(document).ready(function(){

	//slider
if(window.location.href.indexOf('index') > -1){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1500,
    responsive:true,
    pager: false
  });
}

  //Posts
/*
  if(window.location.href.indexOf('index') > -1){

  var posts = [
	{
		title: 'Prueba de titulo 1',
		date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
		content: '<img class="fotos" src="img/foto1.jpg" alt="Modelo"> <br> lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, soluta incidunt rerum beatae sed quasi eaque quibusdam nisi ducimus laudantium, dignissimos amet culpa orem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id error repellendus iure, excepturi in officiis. Est officiis, suscipit, eum facilis assumenda ipsam esse possimus sunt a neque maxime pariatur orem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id error repellendus iure, excepturi in officiis. Est officiis, suscipit, eum facilis assumenda ipsam esse possimus sunt a neque maxime pariatur vel in quis voluptatum fuga ipsum odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sequi cum quibusdam architecto provident placeat in ut ab distinctio animi, enim tenetur commodi nobis consequatur amet labore illum, vitae quo!  "'

	},{
		title: 'Prueba de titulo 2',
		date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
		content:  '<img class="fotos" src="img/modelo.jpg" alt="Modelo"> <br> lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, soluta incidunt rerum beatae sed quasi eaque quibusdam nisi ducimus laudantium, dignissimos amet culpa orem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id error repellendus iure, excepturi in officiis. Est officiis, suscipit, eum facilis assumenda ipsam esse possimus sunt a neque maxime pariatur orem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id error repellendus iure, excepturi in officiis. Est officiis, suscipit, eum facilis assumenda ipsam esse possimus sunt a neque maxime pariatur vel in quis voluptatum fuga ipsum odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sequi cum quibusdam architecto provident placeat in ut ab distinctio animi, enim tenetur commodi nobis consequatur amet labore illum, vitae quo!  "'

	}
	
		

  ];

  posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a mp-mode="dftl" href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=151493379-af1e65b1-06b3-4f82-b0a5-f40f2f55fb5e" name="MP-payButton" class='button-more'>Comprar</a>
					</article>
			`;
			$("#posts").append(post);

  });
  }
*/
  //Selector de tema (cambia color)

 

    //scroll arriba de la web

    $(".subir").click(function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: 0
    	}, 500);

    	return false;
    });

  

/*
	//acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
	//reloj
if(window.location.href.indexOf('reloj') > -1){
	setInterval(function(){
		var reloj = moment().format("h:mm:ss");
		$("#reloj").html(reloj);

	}, 1000);
	
	}
	//validacion formulario
		if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
	*/

	(function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();

	

});