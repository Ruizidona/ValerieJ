<!DOCTYPE HTML>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>ValerieJ - Ropa personalizada</title>

		<!-- Estilos CSS -->
		<link rel="stylesheet" href="css/movil.css">
		<link rel="stylesheet" href="css/notebook.css">
		<link rel="stylesheet" type="text/css" href="css/estilos.css" />
		<link id="theme" rel="stylesheet" type="text/css" href="css/red.css" />
		<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

		<!-- jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" href="js/jquery-ui/jquery-ui.min.css" />
		<link rel="stylesheet" href="js/jquery-ui/jquery-ui.structure.min.css" />
		<link rel="stylesheet" href="js/jquery-ui/jquery-ui.theme.min.css" />
		<script type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>

		<!--Validation-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>


		<!-- Mis Scripts -->
		<script type="text/javascript" src="js/main.js"></script>
	</head>
	<body>
		
		
		<section id="global">

			<!-- Cabecera -->
			<header>
				<div id="logo">
					<h1>Valerie J</h1>
				</div>

				<div class="clearfix"></div>

				<nav id="menu">
					<ul>
						<li><a href="index.html">Inicio</a></li>
						<li><a href="about.html">Sobre mi</a></li>
						<li><a href="contact.html">Contacto</a></li>
						<!-- <li><a href="galeria.php">Galería</a></li> -->
					</ul>
				</nav>
			</header>


			<!-- Contenido -->
			<section id="content">

					

				<div id="box">
					<!-- Cargar formulario -->
					<h2>Contacto</h2>

					<?php 
					$myemail = 'nicoelruiz@gmail.com';
					$name = $_POST['Nombre'];
					$email = $_POST['email'];
					$message = $_POST['Mensaje'];
					$date = $_POST ['date'];

					$to = $myemail;
					$email_subject = "Nuevo mensaje: $subject";
					$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Nacimiento: $date \n Mensaje: \n $message" ;
					$headers = "From: $email";

					mail($to, $email_subject, $email_body, $headers);
					echo '<div id="msg">"El mensaje se ha enviado correctamente"</div>';
										?>

					<form action="contact.php" method="POST" id="form_contact">
						<label for="Nombre">Nombre</label>
						<input type="text" name="Nombre" data-validation="alphanumeric" />

						<label for="Apellidos">Apellidos</label>
						<input type="text" name="Apellidos" data-validation="alphanumeric" />

						<label>Email</label>
						<input type="email" name="email" data-validation="email"/>


						<label for="date">Fecha de nacimiendo</label>
						<input type="date" name="date" data-validation="date" data-validation-format="dd-mm-yyyy"/>

						<label for="Mensaje">Consulta</label>
						<textarea name= "Mensaje" id="rows" rows="15" cols="44">
							
						</textarea> 

						<input id="button-more" type="submit" value="Enviar" />
					</form>
				</div>

				<aside id="sidebar">
					<div id="about1">
						<h4><span id="span">¿Dónde estamos?</span></h4>
						<img src="img/ubicacion.jpg" />
						<p>Podes encontrar nuestros productos aquí</p>
						<a href="https://www.google.com.ar/maps/place/Momentos+Eleg%C3%AD+tu+moda/@-34.58959,-58.4174263,15.9z/data=!4m5!3m4!1s0x95bcca804f5eae0f:0xb81e90739bbce561!8m2!3d-34.5888067!4d-58.4151757">Abrir en maps</a>
					</div>

				
					</div>

				</aside>

				<div class="clearfix"></div>
			</section>

		</section>

		<footer>
			ValerieJ  - 2020 &copy;

			<a href="#" class="subir">Ir arriba</a>
		</footer>
	</body>
</html>