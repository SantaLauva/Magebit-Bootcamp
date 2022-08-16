<?php

$var_username = 'username';
$var_pass = 'password';

$users = json_decode(file_get_contents('user.json'),true);

$data = $_POST;

$username = $data[$var_username] ?? '';
$pass = $data[$var_pass] ?? '';

if (!$username || !$pass){
    return;
}

$result =[
  $var_username => $username,
  $var_pass => $pass  
];

$canInsert = true;

foreach($users as $user){
    if ($user[$var_username] === $username){
        $canInsert = false;
        break;
    }
}

if(!$canInsert){
    echo "He is already in the club";
    return false;
}

$users[] = $result;

if(file_put_contents('user.json',json_encode($users))){
    echo "Your a cool guy";
}

header("Location: http://web.local/layout.php");
