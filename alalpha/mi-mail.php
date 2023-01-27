<!--

Este redireccionador de correo requiere que se le envien tres datos por el metodo POST:

'email' 
correo electronico de la persona que rellena el formulario (remitente)

'destinatario'
el correo electronico de la persona que recibirá el mensaje

'redireccion'
la url de la página de confirmación que se muestra despues

-->

<?
//    mail("armatedearte@gmail.com","asuntillo","Este es el cuerpo del mensaje");
    
while(list($nombre_campo, $valor_campo ) = each($_POST)) {
  strtolower ($nombre_campo); 
  if(is_array($valor_campo)){
    $msg .= ucfirst($nombre_campo).": \n";
    while (list ($val) = each ($valor_campo)) {
      $msg .= $val."\n";
    }
    $msg .= "\n";
  }else{
    if($nombre_campo != "destinatario" and $nombre_campo != "redireccion"){
      $msg .= ucfirst($nombre_campo).": ".$valor_campo."\n\n"; }
  }
}
$msg .= "----------------------------------------------\n";
$msg .= "Datos enviados desde {$_SERVER['SERVER_NAME']} por cortesía de Alalpha\n";
mail($_POST['destinatario'],"Mensaje de contacto",$msg,"From: $_POST['email']");

echo $_POST['destinatario'];
echo $_POST['nombre'];


  header("Location: $_POST['redireccion']");
  print "<meta http-equiv=Refresh content=\"5 ; url=$_POST['redireccion']\">"; 

?>


<p style='font: 1.5rem sans-serif; text-align:center; margin-top: 30vh'> El mensaje se ha enviado correctamente, felicidades. <br> <br>

  <input type="button" value="< Volver" onclick="history.go(-1)" >  </p> 



