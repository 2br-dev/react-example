<?php
// 
require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/core/headers.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/back_end/classes/User.php";
// 
$fields = [
    'email'         => $_POST['email'],
    'password'      => $_POST['password'],
    'dublePassword' => $_POST['dublePassword']
];
//
$user = new User();
$user->addUser($fields);