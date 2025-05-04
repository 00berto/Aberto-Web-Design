<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = strip_tags(trim($_POST["mensaje"]));

    $to = "aberto.webdesign@gmail.com"; // <-- cambiá esto por tu correo
    $subject = "Nueva confirmación de asistencia 🎉";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2 style='text-align:center;'>¡Mensaje enviado correctamente! 🎉</h2>";
    } else {
        echo "<h2 style='text-align:center;'>Error al enviar el mensaje.</h2>";
    }
}
?>
