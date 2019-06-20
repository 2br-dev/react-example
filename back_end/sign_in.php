<?php
// 
require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/core/headers.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/classes/User.php";
// 
$fields = [
    'email'         => $_POST['email'],
    'password'      => $_POST['password']
];
//
$user = new User();