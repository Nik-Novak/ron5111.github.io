<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: nfica Contact Form'; 
    $to = 'n.novak360@gmail.com'; 
    

    $body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message: $message"
        
    if $_POST['submit']{
        if( mail($to, $subject, $body, $from) ){
            echo '<p>Your message has been sent!</p>';
        }
        else{
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    }
?>