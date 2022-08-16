<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php

$var_username = 'username';
$var_pass = 'password';

$users = json_decode(file_get_contents('user.json'),true);

$data = $_POST;

$username = $data[$var_username] ?? '';
$pass = $data[$var_pass] ?? '';

$isMatch = false;

foreach($users as $user){
    if ($username === $user[$var_username]){
        if ($pass === $user[$var_pass]){
            $isMatch = true;
            break;
        }
    }
}

if ($isMatch){
    echo sprintf('Hello %s',htmlspecialchars($username));
}else{
    echo "Get out of my swamp";
}
