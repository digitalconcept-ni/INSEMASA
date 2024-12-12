<?php
    $destinatario = 'desarrollo.digitalconcept@gmail.com';

    $nombre =  $_POST['name'];
    $prefix =  $_POST['prefix'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $asunto = $_POST['subject'];
    $mensaje = $_POST['message'];
    $geo = $_POST['geo'];

    $body = <<<HTML
    <h1> Contacto desde la web</h1>
    <p>De: $nombre - +$prefix $phone - $email</p>
    <h2>Mensaje: </h2>
    $mensaje

    <h3> Informacion adicional <h3>
    $geo
    HTML;


    // Encabezados y codificacion del correo
    $header = "MIME-Version: 1.0 \r\n";
    $header.= "Content-type: text/html;
    charset=utf-8 \r\n";
    $header.= "From: $nombre <$email> \r\n";  

    mail($destinatario, $asunto, $body, $header);
    echo "<script> alert('correo enviado exitosamente') </script>"
?>