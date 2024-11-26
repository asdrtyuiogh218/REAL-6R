<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = htmlspecialchars($_POST['message']); // Sanitize input

    $to = "m-12120958@moe-dl.edu.my"; // Replace with your email address
    $subject = "Message from HTML Form";
    $headers = "From: 6Rwebsite.gmail.com\r\n"; // Replace with your sender email

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send the email.";
    }
} else {
    echo "Invalid request.";
}
?>
