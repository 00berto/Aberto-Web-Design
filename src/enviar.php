<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

$mail = new PHPMailer(true);

try {
     
    $config = require '../config/config.php';

    $mail->Host       = $config['MAIL_HOST'];
    $mail->Username   = $config['MAIL_USERNAME'];
    $mail->Password   = $config['MAIL_PASSWORD'];
    $mail->Port       = $config['MAIL_PORT'];
    $mail->setFrom($config['MAIL_USERNAME'], $config['MAIL_FROM_NAME']);

    // Remitente
    $mail->setFrom('aberto.webdesign@gmail.com', 'Aberto Web Design');
    $mail->addAddress($_POST['email'], $_POST['nombre']); // Cliente
    $mail->addReplyTo('aberto.webdesign@gmail.com', 'Responder a');

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Gracias por tu mensaje';
    $mensaje_cliente = htmlspecialchars($_POST['mensaje']);

    $mail->Body = "
        <h2>Hola {$_POST['nombre']},</h2>
        <p>Gracias por contactarte. He recibido tu mensaje:</p>
        <blockquote>$mensaje_cliente</blockquote>
        <p>Me pondre en contacto contigo pronto.</p>
        <br>
        <p><strong>Saludos,</strong><br>
        <img src='https://github.com/00berto/A_berto/blob/main/logo/logo2/logo_aberto.png' alt='Logo' width='40' style='vertical-align: middle; margin-right: 8px;'>
        Aberto Web Design </p>
    ";

    $mail->send();
    echo "Mensaje enviado correctamente.";
} catch (Exception $e) {
    echo "Error al enviar: {$mail->ErrorInfo}";
}
?>
