<?php

if(isset($_GET['param'])) {
    require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/core/headers.php";
    require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/classes/User.php";
    //
    $user = new User();
    $user->verify($_GET['param']);
    header('Location: http://localhost:3000/');
}