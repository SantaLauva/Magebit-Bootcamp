<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$routes = [
    'home' => 'login_form.php',
    'login' => 'login.php',
    'register' => 'register.php'
];

$route = $_GET['route'] ?? 'home';

$render = '';
switch ($route) {
    case 'login':
        $render =  $routes['login'];
        break;
    case 'register':
        $render =  $routes['register'];
        break;
    default:
        $render =  $routes['home'];
        break;
}

$layout = file_get_contents('layout.php');
$layout = str_replace('$body',"include('{$render}')",$layout);

eval('?>'.$layout.'<?php');
