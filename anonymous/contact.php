<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$body="Name: $name<br />Email: $email<br />Message: $message";
   
$headers = "From: $email \r\n";
$headers.= "Content-Type: text/html; charset=ISO-8859-1 ";
$headers .= "MIME-Version: 1.0 ";

mail("obiwon@iinet.net.au", "Email from Anonymous Website", $body, $headers);

header('Location: index.html');
?>